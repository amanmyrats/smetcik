import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { BaseCompanyUnitListComponent } from './components/base-company-unit-list/base-company-unit-list.component';
import { BaseCompanyTradeListComponent } from './components/base-company-trade-list/base-company-trade-list.component';
import { BaseCompanyCountryListComponent } from './components/base-company-country-list/base-company-country-list.component';
import { BaseCompanyCurrencyListComponent } from './components/base-company-currency-list/base-company-currency-list.component';
import { BaseCompanyBoqItemListComponent } from './components/base-company-boq-item-list/base-company-boq-item-list.component';
import { BaseCompanyResourceListComponent } from './components/base-company-resource-list/base-company-resource-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { BaseCompanyLotListComponent } from './components/base-company-lot-list/base-company-lot-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyHomeComponent,
    children: [
      {
        path: 'dashboard',
        component: CompanyDashboardComponent
      },
      {
        path: 'projects', 
        component: ProjectListComponent
      },
      {
        path: 'boqitems', 
        component: BaseCompanyBoqItemListComponent
      },
      {
        path: 'resources', 
        component: BaseCompanyResourceListComponent
      },
      {
        path: 'units', 
        component: BaseCompanyUnitListComponent
      },
      {
        path: 'trades', 
        component: BaseCompanyTradeListComponent
      },
      {
        path: 'lots', 
        component: BaseCompanyLotListComponent
      },
      {
        path: 'countries', 
        component: BaseCompanyCountryListComponent
      },
      {
        path: 'currencies', 
        component: BaseCompanyCurrencyListComponent
      },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
