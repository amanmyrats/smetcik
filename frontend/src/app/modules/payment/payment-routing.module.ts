import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentHomeComponent } from './payment-home/payment-home.component';
import { PaymentDashboardComponent } from './payment-dashboard/payment-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentHomeComponent,
    children: [
      {
        path: 'dashboard', 
        component: PaymentDashboardComponent,
      }, 
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
