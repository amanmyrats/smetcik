import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCountry } from '../../models/base-country.model';
import { BaseCountryService } from '../../services/base-country.service';

@Component({
  selector: 'app-base-country-list',
  templateUrl: './base-country-list.component.html',
  styleUrls: ['./base-country-list.component.scss']
})
export class BaseCountryListComponent implements OnInit {

  baseCountries: BaseCountry[];
  baseCountryToEdit: BaseCountry | null = null;
  showBaseCountryForm: boolean = false;
  showBaseCountryImportForm: boolean = false;

  constructor(
    private baseCountryService: BaseCountryService, 
  ){}

  ngOnInit(): void {
    this.getBaseCountries();
  }

  getBaseCountries(queryParams?: string): void {
    this.baseCountryService.getBaseCountries(queryParams).subscribe({
      next: (paginatedBaseCountries: Paginated<BaseCountry>) => {
        this.baseCountries = paginatedBaseCountries.results!;
        console.log("Successfully fetched BaseCountry.");
        console.log(paginatedBaseCountries.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseCountry");
        console.log(err);
      }
    });
  }

  deleteBaseCountry(id: string): void {
    this.baseCountryService.deleteBaseCountry(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseCountry.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseCountry");
        console.log(err);
      }
    });
  }
  
  openCreateBaseCountryForm(): void {
    this.baseCountryToEdit = null;
    this.showBaseCountryForm = true;
  }

  openUpdateBaseCountryForm(baseCountryToEdit: BaseCountry): void {
    this.baseCountryToEdit = baseCountryToEdit;
    this.showBaseCountryForm = true;
  }
  
  handleBaseCountryFormCloseEvent(baseCountry: BaseCountry | null): void {
    console.log("received:");
    console.log(baseCountry);
    this.getBaseCountries();
    this.showBaseCountryForm = false;
  }

  exportExcel(): void {
    this.baseCountryService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseUnits.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_countries.xlsx';
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

  openBaseCountryImportForm(): void {
    this.showBaseCountryImportForm = true;
  }

  handleBaseCountryImportFormCloseEvent(): void {
    this.getBaseCountries();
    this.showBaseCountryImportForm = false;
  }

}