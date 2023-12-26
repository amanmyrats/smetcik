import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyCurrency } from '../../models/base-company-currency.model';
import { BaseCompanyCurrencyService } from '../../services/base-company-currency.service';

@Component({
  selector: 'app-base-company-currency-list',
  templateUrl: './base-company-currency-list.component.html',
  styleUrls: ['./base-company-currency-list.component.scss']
})
export class BaseCompanyCurrencyListComponent implements OnInit {

  baseCompanyCurrencies: BaseCompanyCurrency[];
  baseCompanyCurrencyToEdit: BaseCompanyCurrency | null = null;
  showBaseCompanyCurrencyForm: boolean = false;
  showBaseCompanyCurrencyImportForm: boolean = false;

  constructor(
    private baseCompanyCurrencyService: BaseCompanyCurrencyService, 
  ){}

  ngOnInit(): void {
    this.getBaseCompanyCurrencies();
  }

  getBaseCompanyCurrencies(queryParams?: string): void {
    this.baseCompanyCurrencyService.getBaseCompanyCurrencies(queryParams).subscribe({
      next: (paginatedBaseCompanyCurrencies: Paginated<BaseCompanyCurrency>) => {
        this.baseCompanyCurrencies = paginatedBaseCompanyCurrencies.results!;
        console.log("Successfully fetched BaseCompanyCurrency.");
        console.log(paginatedBaseCompanyCurrencies.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseCompanyCurrency");
        console.log(err);
      }
    });
  }

  deleteBaseCompanyCurrency(id: string): void {
    this.baseCompanyCurrencyService.deleteBaseCompanyCurrency(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseCompanyCurrency.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseCompanyCurrency");
        console.log(err);
      }
    });
  }
  
  openCreateBaseCompanyCurrencyForm(): void {
    this.baseCompanyCurrencyToEdit = null;
    this.showBaseCompanyCurrencyForm = true;
  }

  openUpdateBaseCompanyCurrencyForm(baseCompanyCurrencyToEdit: BaseCompanyCurrency): void {
    this.baseCompanyCurrencyToEdit = baseCompanyCurrencyToEdit;
    this.showBaseCompanyCurrencyForm = true;
  }
  
  handleBaseCompanyCurrencyFormCloseEvent(baseCompanyCurrency: BaseCompanyCurrency | null): void {
    console.log("received:");
    console.log(baseCompanyCurrency);
    this.getBaseCompanyCurrencies();
    this.showBaseCompanyCurrencyForm = false;
  }

  exportExcel(): void {
    this.baseCompanyCurrencyService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseUnits.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_company_currencies.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting BaseUnits");
        console.log(err);
      }
    });
  }

  openBaseCompanyCurrencyImportForm(): void {
    this.showBaseCompanyCurrencyImportForm = true;
  }

  handleBaseCompanyCurrencyImportFormCloseEvent(): void {
    this.getBaseCompanyCurrencies();
    this.showBaseCompanyCurrencyImportForm = false;
  }

}