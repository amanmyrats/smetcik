import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCurrency } from '../../models/base-currency.model';
import { BaseCurrencyService } from '../../services/base-currency.service';

@Component({
  selector: 'app-base-currency-list',
  templateUrl: './base-currency-list.component.html',
  styleUrls: ['./base-currency-list.component.scss']
})
export class BaseCurrencyListComponent implements OnInit {

  baseCurrencies: BaseCurrency[];
  baseCurrencyToEdit: BaseCurrency | null = null;
  showBaseCurrencyForm: boolean = false;
  showBaseCurrencyImportForm: boolean = false;

  constructor(
    private baseCurrencyService: BaseCurrencyService, 
  ){}

  ngOnInit(): void {
    this.getBaseCurrencies();
  }

  getBaseCurrencies(queryParams?: string): void {
    this.baseCurrencyService.getBaseCurrencies(queryParams).subscribe({
      next: (paginatedBaseCurrencies: Paginated<BaseCurrency>) => {
        this.baseCurrencies = paginatedBaseCurrencies.results!;
        console.log("Successfully fetched BaseCurrency.");
        console.log(paginatedBaseCurrencies.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseCurrency");
        console.log(err);
      }
    });
  }

  deleteBaseCurrency(id: string): void {
    this.baseCurrencyService.deleteBaseCurrency(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseCurrency.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseCurrency");
        console.log(err);
      }
    });
  }
  
  openCreateBaseCurrencyForm(): void {
    this.baseCurrencyToEdit = null;
    this.showBaseCurrencyForm = true;
  }

  openUpdateBaseCurrencyForm(baseCurrencyToEdit: BaseCurrency): void {
    this.baseCurrencyToEdit = baseCurrencyToEdit;
    this.showBaseCurrencyForm = true;
  }
  
  handleBaseCurrencyFormCloseEvent(baseCurrency: BaseCurrency | null): void {
    console.log("received:");
    console.log(baseCurrency);
    this.getBaseCurrencies();
    this.showBaseCurrencyForm = false;
  }

  exportExcel(): void {
    this.baseCurrencyService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseCurrencies.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_currencies.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting BaseCurrencies");
        console.log(err);
      }
    });
  }

  openBaseCurrencyImportForm(): void {
    this.showBaseCurrencyImportForm = true;
  }

  handleBaseCurrencyImportFormCloseEvent(): void {
    this.getBaseCurrencies();
    this.showBaseCurrencyImportForm = false;
  }

}