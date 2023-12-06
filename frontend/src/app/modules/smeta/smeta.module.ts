import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TreeModule } from 'primeng/tree';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

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
import { TradeFormComponent } from './components/trade-form/trade-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LotFormComponent } from './components/lot-form/lot-form.component';
import { BoqItemFormComponent } from './components/boq-item-form/boq-item-form.component';

@NgModule({
  declarations: [
    BoqListComponent,
    SmetaDashboardComponent,
    BoqDetailComponent,
    BoqItemListComponent,
    BoqItemDetailComponent,
    ComsumptionListComponent,
    ComsumptionDetailComponent,
    TradeFormComponent,
    LotFormComponent,
    BoqItemFormComponent
  ],
  imports: [
    CommonModule,
    SmetaRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 

    CardModule, 
    ButtonModule,
    AccordionModule, 
    TableModule,
    TagModule, 
    TreeModule, 
    DialogModule, 
    InputTextModule, 
    DropdownModule, 
    InputNumberModule,
  ]
})
export class SmetaModule { }
