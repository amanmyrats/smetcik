import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TreeModule } from 'primeng/tree';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

import { ImportComponent } from './components/import/import.component';
import { SharedBoqItemListComponent } from './components/shared-boq-item-list/shared-boq-item-list.component';
import { SharedUnitListComponent } from './components/shared-unit-list/shared-unit-list.component';
import { SharedTradeListComponent } from './components/shared-trade-list/shared-trade-list.component';
import { SharedLotListComponent } from './components/shared-lot-list/shared-lot-list.component';
import { SharedCountryListComponent } from './components/shared-country-list/shared-country-list.component';
import { SharedCurrencyListComponent } from './components/shared-currency-list/shared-currency-list.component';
import { SharedResourceListComponent } from './components/shared-resource-list/shared-resource-list.component';
import { SharedConsumptionListComponent } from './components/shared-consumption-list/shared-consumption-list.component';
import { SharedCompanyListComponent } from './components/shared-company-list/shared-company-list.component';
import { SharedProjectListComponent } from './components/shared-project-list/shared-project-list.component';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';


@NgModule({
  declarations: [
    ImportComponent,
    SharedBoqItemListComponent,
    SharedUnitListComponent,
    SharedTradeListComponent,
    SharedLotListComponent,
    SharedCountryListComponent,
    SharedCurrencyListComponent,
    SharedResourceListComponent,
    SharedConsumptionListComponent,
    SharedCompanyListComponent,
    SharedProjectListComponent,
    FilterSearchComponent
  ],
  imports: [
    CommonModule, 
     
    FormsModule, 
    ReactiveFormsModule, 

    CardModule, 
    ButtonModule,
    AccordionModule, 
    TableModule,
    TagModule, 
    TreeModule, 
    DialogModule, 
    InputTextModule, 
    DropdownModule, 
    InputNumberModule,
    ToastModule, 
    CheckboxModule, 
    ToolbarModule, 
    FileUploadModule, 
    PaginatorModule, 
  ], 
  exports: [
    ImportComponent, 
    SharedUnitListComponent,
    SharedTradeListComponent,
    SharedLotListComponent,
    SharedCountryListComponent,
    SharedCurrencyListComponent,
    SharedResourceListComponent,
    SharedBoqItemListComponent,
    SharedConsumptionListComponent, 
    SharedCompanyListComponent, 
    SharedProjectListComponent, 
    FilterSearchComponent, 

    CommonModule, 
     
    FormsModule, 
    ReactiveFormsModule, 

    CardModule, 
    ButtonModule,
    AccordionModule, 
    TableModule,
    TagModule, 
    TreeModule, 
    DialogModule, 
    InputTextModule, 
    DropdownModule, 
    InputNumberModule,
    ToastModule, 
    CheckboxModule, 
    ToolbarModule, 
    FileUploadModule, 
    PaginatorModule, 
    
  ]
})
export class SharedModule { }
