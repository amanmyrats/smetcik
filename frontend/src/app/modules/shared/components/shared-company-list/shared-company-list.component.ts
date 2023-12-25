import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/modules/company/models/company.model';

@Component({
  selector: 'app-shared-company-list',
  templateUrl: './shared-company-list.component.html',
  styleUrls: ['./shared-company-list.component.scss']
})
export class SharedCompanyListComponent implements OnInit {

  @Input() companies: Company[];
  
  @Output() getCountriesEventEmitter = new EventEmitter<any>();
  @Output() deleteCompanyEventEmitter = new EventEmitter<string>();
  @Output() openCreateCompanyFormEventEmitter = new EventEmitter<any>();
  @Output() openUpdateCompanyFormEventEmitter = new EventEmitter<Company>();
  @Output() handleCompanyFormCloseEventEventEmitter = new EventEmitter<Company>();
  @Output() openConsumptionListEventEmitter = new EventEmitter<any>();
  @Output() exportExcelEventEmitter = new EventEmitter<any>();
  @Output() openCompanyImportFormEventEmitter = new EventEmitter<any>();
  @Output() handleCompanyImportFormCloseEventEventEmitter = new EventEmitter<any>();
  
  companyToEdit: Company | null = null;

  constructor(
  ){}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(queryParams?: string): void {
    this.getCountriesEventEmitter.emit();
  }

  deleteCompany(id: string): void {
    this.deleteCompanyEventEmitter.emit();
  }
  
  openCreateCompanyForm(): void {
    this.openCreateCompanyFormEventEmitter.emit();
  }

  openUpdateCompanyForm(companyToEdit: Company): void {
    this.openUpdateCompanyFormEventEmitter.emit();
  }
  
  handleCompanyFormCloseEvent(company: Company | null): void {
    this.handleCompanyFormCloseEventEventEmitter.emit();
  }

  openConsumptionList(company: Company): void {
    this.openConsumptionListEventEmitter.emit();
  }
  
  exportExcel(): void {
    this.exportExcelEventEmitter.emit();
  }

  openCompanyImportForm(): void {
    this.openCompanyImportFormEventEmitter.emit();
  }

  handleCompanyImportFormCloseEvent(): void {
    this.handleCompanyImportFormCloseEventEventEmitter.emit();
  }

}