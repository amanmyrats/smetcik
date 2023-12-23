import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

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
    CommonModule,
    AdminRoutingModule, 

    ButtonModule, 
  ]
})
export class AdminModule { }
