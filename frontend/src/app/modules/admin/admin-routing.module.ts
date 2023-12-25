import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BaseUnitListComponent } from './components/base-unit-list/base-unit-list.component';
import { BaseTradeListComponent } from './components/base-trade-list/base-trade-list.component';
import { BaseCountryListComponent } from './components/base-country-list/base-country-list.component';
import { BaseCurrencyListComponent } from './components/base-currency-list/base-currency-list.component';
import { BaseBoqItemListComponent } from './components/base-boq-item-list/base-boq-item-list.component';
import { BaseResourceListComponent } from './components/base-resource-list/base-resource-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { BaseLotListComponent } from './components/base-lot-list/base-lot-list.component';

const routes: Routes = [
  {
    path: '', 
    component: AdminHomeComponent, 
    children: [
      {
        path: 'dashboard', 
        component: AdminDashboardComponent
      },
      {
        path: 'companies', 
        component: CompanyListComponent
      },
      {
        path: 'units', 
        component: BaseUnitListComponent
      },
      {
        path: 'trades', 
        component: BaseTradeListComponent
      },
      {
        path: 'lots', 
        component: BaseLotListComponent
      },
      {
        path: 'countries', 
        component: BaseCountryListComponent
      },
      {
        path: 'currencies', 
        component: BaseCurrencyListComponent
      },
      {
        path: 'boqitems', 
        component: BaseBoqItemListComponent
      },
      {
        path: 'resources', 
        component: BaseResourceListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
