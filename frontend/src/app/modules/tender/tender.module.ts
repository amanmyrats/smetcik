import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenderRoutingModule } from './tender-routing.module';
import { TenderDashboardComponent } from './tender-dashboard/tender-dashboard.component';


@NgModule({
  declarations: [
    TenderDashboardComponent
  ],
  imports: [
    CommonModule,
    TenderRoutingModule
  ]
})
export class TenderModule { }
