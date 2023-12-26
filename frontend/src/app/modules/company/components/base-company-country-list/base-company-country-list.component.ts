import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyCountry } from '../../models/base-company-country.model';
import { BaseCompanyCountryService } from '../../services/base-company-country.service';

@Component({
  selector: 'app-base-company-country-list',
  templateUrl: './base-company-country-list.component.html',
  styleUrls: ['./base-company-country-list.component.scss']
})
export class BaseCompanyCountryListComponent implements OnInit {

  baseCompanyCountries: BaseCompanyCountry[];
  baseCompanyCountryToEdit: BaseCompanyCountry | null = null;
  showBaseCompanyCountryForm: boolean = false;
  showBaseCompanyCountryImportForm: boolean = false;

  constructor(
    private baseCompanyCountryService: BaseCompanyCountryService, 
  ){}

  ngOnInit(): void {
    this.getBaseCompanyCountries();
  }

  getBaseCompanyCountries(queryParams?: string): void {
    this.baseCompanyCountryService.getBaseCompanyCountries(queryParams).subscribe({
      next: (paginatedBaseCompanyCountries: Paginated<BaseCompanyCountry>) => {
        this.baseCompanyCountries = paginatedBaseCompanyCountries.results!;
        console.log("Successfully fetched BaseCompanyCountry.");
        console.log(paginatedBaseCompanyCountries.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseCompanyCountry");
        console.log(err);
      }
    });
  }

  deleteBaseCompanyCountry(id: string): void {
    this.baseCompanyCountryService.deleteBaseCompanyCountry(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseCompanyCountry.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseCompanyCountry");
        console.log(err);
      }
    });
  }
  
  openCreateBaseCompanyCountryForm(): void {
    this.baseCompanyCountryToEdit = null;
    this.showBaseCompanyCountryForm = true;
  }

  openUpdateBaseCompanyCountryForm(baseCompanyCountryToEdit: BaseCompanyCountry): void {
    this.baseCompanyCountryToEdit = baseCompanyCountryToEdit;
    this.showBaseCompanyCountryForm = true;
  }
  
  handleBaseCompanyCountryFormCloseEvent(baseCompanyCountry: BaseCompanyCountry | null): void {
    console.log("received:");
    console.log(baseCompanyCountry);
    this.getBaseCompanyCountries();
    this.showBaseCompanyCountryForm = false;
  }

  exportExcel(): void {
    this.baseCompanyCountryService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseUnits.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_company_countries.xlsx';
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

  openBaseCompanyCountryImportForm(): void {
    this.showBaseCompanyCountryImportForm = true;
  }

  handleBaseCompanyCountryImportFormCloseEvent(): void {
    this.getBaseCompanyCountries();
    this.showBaseCompanyCountryImportForm = false;
  }

}