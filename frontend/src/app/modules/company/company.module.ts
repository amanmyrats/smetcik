import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { BaseCompanyUnitListComponent } from './components/base-company-unit-list/base-company-unit-list.component';
import { BaseCompnyTradeListComponent } from './components/base-compny-trade-list/base-compny-trade-list.component';
import { BaseCompanyCountryListComponent } from './components/base-company-country-list/base-company-country-list.component';
import { BaseCompanyCurrencyListComponent } from './components/base-company-currency-list/base-company-currency-list.component';
import { BaseCompanyBoqItemListComponent } from './components/base-company-boq-item-list/base-company-boq-item-list.component';
import { BaseCompanyResourceListComponent } from './components/base-company-resource-list/base-company-resource-list.component';
import { BaseCompanyTradeListComponent } from './components/base-company-trade-list/base-company-trade-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';


@NgModule({
  declarations: [
    CompanyDashboardComponent,
    CompanyHomeComponent,
    BaseCompanyUnitListComponent,
    BaseCompnyTradeListComponent,
    BaseCompanyCountryListComponent,
    BaseCompanyCurrencyListComponent,
    BaseCompanyBoqItemListComponent,
    BaseCompanyResourceListComponent,
    BaseCompanyTradeListComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule, 

    ButtonModule, 
  ]
})
export class CompanyModule { }
