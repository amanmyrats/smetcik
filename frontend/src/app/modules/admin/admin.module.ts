import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
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


import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BaseUnitListComponent } from './components/base-unit-list/base-unit-list.component';
import { BaseTradeListComponent } from './components/base-trade-list/base-trade-list.component';
import { BaseCountryListComponent } from './components/base-country-list/base-country-list.component';
import { BaseCurrencyListComponent } from './components/base-currency-list/base-currency-list.component';
import { BaseBoqItemListComponent } from './components/base-boq-item-list/base-boq-item-list.component';
import { BaseResourceListComponent } from './components/base-resource-list/base-resource-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourceImportComponent } from '../smeta/components/resource-import/resource-import.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    BaseUnitListComponent,
    BaseTradeListComponent,
    BaseCountryListComponent,
    BaseCurrencyListComponent,
    BaseBoqItemListComponent,
    BaseResourceListComponent,
    CompanyListComponent
  ],
  imports: [
    AdminRoutingModule, 
    
    SharedModule, 
  ]
})
export class AdminModule { }
