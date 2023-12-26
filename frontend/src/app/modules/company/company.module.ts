import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { BaseCompanyUnitListComponent } from './components/base-company-unit-list/base-company-unit-list.component';
import { BaseCompanyCountryListComponent } from './components/base-company-country-list/base-company-country-list.component';
import { BaseCompanyCurrencyListComponent } from './components/base-company-currency-list/base-company-currency-list.component';
import { BaseCompanyBoqItemListComponent } from './components/base-company-boq-item-list/base-company-boq-item-list.component';
import { BaseCompanyResourceListComponent } from './components/base-company-resource-list/base-company-resource-list.component';
import { BaseCompanyTradeListComponent } from './components/base-company-trade-list/base-company-trade-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SharedModule } from '../shared/shared.module';
import { BaseCompanyLotListComponent } from './components/base-company-lot-list/base-company-lot-list.component';


@NgModule({
  declarations: [
    CompanyDashboardComponent,
    CompanyHomeComponent,
    BaseCompanyUnitListComponent,
    BaseCompanyCountryListComponent,
    BaseCompanyCurrencyListComponent,
    BaseCompanyBoqItemListComponent,
    BaseCompanyResourceListComponent,
    BaseCompanyTradeListComponent,
    BaseCompanyLotListComponent, 
    ProjectListComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule, 

    SharedModule, 
  ]
})
export class CompanyModule { }
