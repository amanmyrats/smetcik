import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { Country } from 'src/app/modules/common/models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[];
  countryToEdit: Country | null = null;
  showCountryForm: boolean = false;
  showCountryImportForm: boolean = false;

  constructor(
    private countryService: CountryService, 
  ){}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(queryParams?: string): void {
    this.countryService.getCountries(queryParams).subscribe({
      next: (paginatedCountries: Paginated<Country>) => {
        this.countries = paginatedCountries.results!;
        console.log("Successfully fetched Country.");
        console.log(paginatedCountries.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Country");
        console.log(err);
      }
    });
  }

  deleteCountry(id: string): void {
    this.countryService.deleteCountry(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted Country.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting Country");
        console.log(err);
      }
    });
  }
  
  openCreateCountryForm(): void {
    this.countryToEdit = null;
    this.showCountryForm = true;
  }

  openUpdateCountryForm(countryToEdit: Country): void {
    this.countryToEdit = countryToEdit;
    this.showCountryForm = true;
  }
  
  handleCountryFormCloseEvent(country: Country | null): void {
    console.log("received:");
    console.log(country);
    this.getCountries();
    this.showCountryForm = false;
  }

  exportExcel(): void {
    this.countryService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported Countries.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'countries.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting Countries");
        console.log(err);
      }
    });
  }

  openCountryImportForm(): void {
    this.showCountryImportForm = true;
  }

  handleCountryImportFormCloseEvent(): void {
    this.getCountries();
    this.showCountryImportForm = false;
  }

}