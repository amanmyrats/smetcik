import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseCountry } from 'src/app/modules/admin/models/base-country.model';
import { Country } from 'src/app/modules/common/models/country.model';
import { BaseCompanyCountry } from 'src/app/modules/company/models/base-company-country.model';

@Component({
  selector: 'app-shared-country-list',
  templateUrl: './shared-country-list.component.html',
  styleUrls: ['./shared-country-list.component.scss']
})
export class SharedCountryListComponent implements OnInit {

  @Input() countries: BaseCountry[] | BaseCompanyCountry[] | Country[];
  
  @Output() getCountriesEventEmitter = new EventEmitter<any>();
  @Output() deleteCountryEventEmitter = new EventEmitter<string>();
  @Output() openCreateCountryFormEventEmitter = new EventEmitter<any>();
  @Output() openUpdateCountryFormEventEmitter = 
            new EventEmitter<BaseCountry | BaseCompanyCountry | Country>();
  @Output() handleCountryFormCloseEventEventEmitter = 
            new EventEmitter<BaseCountry | BaseCompanyCountry | Country>();
  @Output() openConsumptionListEventEmitter = new EventEmitter<any>();
  @Output() exportExcelEventEmitter = new EventEmitter<any>();
  @Output() openCountryImportFormEventEmitter = new EventEmitter<any>();
  @Output() handleCountryImportFormCloseEventEventEmitter = new EventEmitter<any>();
  
  countryToEdit: BaseCountry | BaseCompanyCountry | Country | null = null;

  constructor(
  ){}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(queryParams?: string): void {
    this.getCountriesEventEmitter.emit();
  }

  deleteCountry(id: string): void {
    this.deleteCountryEventEmitter.emit();
  }
  
  openCreateCountryForm(): void {
    this.openCreateCountryFormEventEmitter.emit();
  }

  openUpdateCountryForm(countryToEdit: Country): void {
    this.openUpdateCountryFormEventEmitter.emit();
  }
  
  handleCountryFormCloseEvent(country: Country | null): void {
    this.handleCountryFormCloseEventEventEmitter.emit();
  }

  openConsumptionList(country: Country): void {
    this.openConsumptionListEventEmitter.emit();
  }
  
  exportExcel(): void {
    this.exportExcelEventEmitter.emit();
  }

  openCountryImportForm(): void {
    this.openCountryImportFormEventEmitter.emit();
  }

  handleCountryImportFormCloseEvent(): void {
    this.handleCountryImportFormCloseEventEventEmitter.emit();
  }

}