import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoqListComponent } from './components/boq-list/boq-list.component';
import { SmetaDashboardComponent } from './smeta-dashboard/smeta-dashboard.component';
import { BoqDetailComponent } from './components/boq-detail/boq-detail.component';
import { BoqItemListComponent } from './components/boq-item-list/boq-item-list.component';
import { BoqMaterialComponent } from './components/boq-material/boq-material.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { SmetaHomeComponent } from './smeta-home/smeta-home.component';
import { BoqFormComponent } from './components/boq-form/boq-form.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { TradeListComponent } from './components/trade-list/trade-list.component';
import { LotListComponent } from './components/lot-list/lot-list.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';

const routes: Routes = [
  {
    path: '', // Specify the route path
    component: SmetaHomeComponent, // Specify the component to be displayed

    children: [
      {
        path: 'dashboard',
        component: SmetaDashboardComponent,
      },
      {
        path: 'boqs/:boqId/boqitems',
        component: BoqItemListComponent
      },
      {
        path: 'boqs/:boqId/resources',
        component: ResourceListComponent,
      },
      {
        path: 'units',
        component: UnitListComponent
      },
      {
        path: 'trades',
        component: TradeListComponent
      },
      {
        path: 'lots',
        component: LotListComponent
      },
      {
        path: 'countries',
        component: CountryListComponent
      },
      {
        path: 'currencies',
        component: CurrencyListComponent
      },
      {
        path: 'boqs/create',
        component: BoqFormComponent,
      },
      {
        path: 'boqs/:boqId',
        component: BoqDetailComponent,
      },
      {
        path: 'boqs',
        component: BoqListComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmetaRoutingModule { }
