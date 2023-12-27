import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { Currency } from 'src/app/modules/common/models/currency.model';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  currencies: Currency[];
  currencyToEdit: Currency | null = null;
  showCurrencyForm: boolean = false;
  showCurrencyImportForm: boolean = false;

  constructor(
    private currencyService: CurrencyService, 
  ){}

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies(queryParams?: string): void {
    this.currencyService.getCurrencies(queryParams).subscribe({
      next: (paginatedCurrencies: Paginated<Currency>) => {
        this.currencies = paginatedCurrencies.results!;
        console.log("Successfully fetched Currency.");
        console.log(paginatedCurrencies.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Currency");
        console.log(err);
      }
    });
  }

  deleteCurrency(id: string): void {
    this.currencyService.deleteCurrency(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted Currency.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting Currency");
        console.log(err);
      }
    });
  }
  
  openCreateCurrencyForm(): void {
    this.currencyToEdit = null;
    this.showCurrencyForm = true;
  }

  openUpdateCurrencyForm(currencyToEdit: Currency): void {
    this.currencyToEdit = currencyToEdit;
    this.showCurrencyForm = true;
  }
  
  handleCurrencyFormCloseEvent(Currency: Currency | null): void {
    console.log("received:");
    console.log(Currency);
    this.getCurrencies();
    this.showCurrencyForm = false;
  }

  exportExcel(): void {
    this.currencyService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported Currencies.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'currencies.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting Currencies");
        console.log(err);
      }
    });
  }

  openCurrencyImportForm(): void {
    this.showCurrencyImportForm = true;
  }

  handleCurrencyImportFormCloseEvent(): void {
    this.getCurrencies();
    this.showCurrencyImportForm = false;
  }

}