import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseCurrency } from 'src/app/modules/admin/models/base-currency.model';
import { Currency } from 'src/app/modules/common/models/currency.model';
import { BaseCompanyCurrency } from 'src/app/modules/company/models/base-company-currency.model';

@Component({
  selector: 'app-shared-currency-list',
  templateUrl: './shared-currency-list.component.html',
  styleUrls: ['./shared-currency-list.component.scss']
})
export class SharedCurrencyListComponent implements OnInit {

  @Input() currencies: BaseCurrency[] | BaseCompanyCurrency[] | Currency[];
  
  @Output() getCurrenciesEventEmitter = new EventEmitter<any>();
  @Output() deleteCurrencyEventEmitter = new EventEmitter<string>();
  @Output() openCreateCurrencyFormEventEmitter = new EventEmitter<any>();
  @Output() openUpdateCurrencyFormEventEmitter = 
            new EventEmitter<BaseCurrency | BaseCompanyCurrency | Currency>();
  @Output() handleCurrencyFormCloseEventEventEmitter = 
            new EventEmitter<BaseCurrency | BaseCompanyCurrency | Currency>();
  @Output() openConsumptionListEventEmitter = new EventEmitter<any>();
  @Output() exportExcelEventEmitter = new EventEmitter<any>();
  @Output() openCurrencyImportFormEventEmitter = new EventEmitter<any>();
  @Output() handleCurrencyImportFormCloseEventEventEmitter = new EventEmitter<any>();
  
  currencyToEdit: BaseCurrency | BaseCompanyCurrency | Currency | null = null;

  constructor(
  ){}

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies(queryParams?: string): void {
    this.getCurrenciesEventEmitter.emit();
  }

  deleteCurrency(id: string): void {
    this.deleteCurrencyEventEmitter.emit();
  }
  
  openCreateCurrencyForm(): void {
    this.openCreateCurrencyFormEventEmitter.emit();
  }

  openUpdateCurrencyForm(currencyToEdit: Currency): void {
    this.openUpdateCurrencyFormEventEmitter.emit();
  }
  
  handleCurrencyFormCloseEvent(currency: Currency | null): void {
    this.handleCurrencyFormCloseEventEventEmitter.emit();
  }

  openConsumptionList(currency: Currency): void {
    this.openConsumptionListEventEmitter.emit();
  }
  
  exportExcel(): void {
    this.exportExcelEventEmitter.emit();
  }

  openCurrencyImportForm(): void {
    this.openCurrencyImportFormEventEmitter.emit();
  }

  handleCurrencyImportFormCloseEvent(): void {
    this.handleCurrencyImportFormCloseEventEventEmitter.emit();
  }

}