import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoqListComponent } from './components/boq-list/boq-list.component';
import { SmetaDashboardComponent } from './smeta-dashboard/smeta-dashboard.component';
import { BoqDetailComponent } from './components/boq-detail/boq-detail.component';
import { BoqItemListComponent } from './components/boq-item-list/boq-item-list.component';

const routes: Routes = [
  {
    path: '', // Specify the route path
    component: SmetaDashboardComponent, // Specify the component to be displayed
    children: [
      {
        path: 'boqs/:boqId/boqitems',
        component: BoqItemListComponent
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
