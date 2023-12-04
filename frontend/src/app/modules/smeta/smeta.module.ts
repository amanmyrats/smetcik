import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';

import { SmetaRoutingModule } from './smeta-routing.module';
import { BoqListComponent } from './components/boq-list/boq-list.component';
import { SmetaDashboardComponent } from './smeta-dashboard/smeta-dashboard.component';
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button';
import { BoqDetailComponent } from './components/boq-detail/boq-detail.component';
import { BoqItemListComponent } from './components/boq-item-list/boq-item-list.component';
import { BoqItemDetailComponent } from './components/boq-item-detail/boq-item-detail.component';
import { ComsumptionListComponent } from './components/comsumption-list/comsumption-list.component';
import { ComsumptionDetailComponent } from './components/comsumption-detail/comsumption-detail.component';

@NgModule({
  declarations: [
    BoqListComponent,
    SmetaDashboardComponent,
    BoqDetailComponent,
    BoqItemListComponent,
    BoqItemDetailComponent,
    ComsumptionListComponent,
    ComsumptionDetailComponent
  ],
  imports: [
    CommonModule,
    SmetaRoutingModule, 

    CardModule, 
    ButtonModule,
    AccordionModule, 
  ]
})
export class SmetaModule { }
