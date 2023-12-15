import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentDashboardComponent } from './payment-dashboard/payment-dashboard.component';
import { PaymentHomeComponent } from './payment-home/payment-home.component';


@NgModule({
  declarations: [
    PaymentDashboardComponent,
    PaymentHomeComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
