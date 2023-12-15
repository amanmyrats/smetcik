import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenderDashboardComponent } from './tender-dashboard/tender-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TenderDashboardComponent, 
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenderRoutingModule { }
