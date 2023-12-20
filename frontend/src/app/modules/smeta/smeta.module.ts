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
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';

import { SmetaRoutingModule } from './smeta-routing.module';
import { BoqListComponent } from './components/boq-list/boq-list.component';
import { SmetaDashboardComponent } from './smeta-dashboard/smeta-dashboard.component';
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button';
import { BoqDetailComponent } from './components/boq-detail/boq-detail.component';
import { BoqItemListComponent } from './components/boq-item-list/boq-item-list.component';
import { BoqItemDetailComponent } from './components/boq-item-detail/boq-item-detail.component';
import { TradeFormComponent } from './components/trade-form/trade-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LotFormComponent } from './components/lot-form/lot-form.component';
import { BoqItemFormComponent } from './components/boq-item-form/boq-item-form.component';
import { ConsumptionListComponent } from './components/consumption-list/consumption-list.component';
import { ConsumptionFormComponent } from './components/consumption-form/consumption-form.component';
import { ResourceFormComponent } from './components/resource-form/resource-form.component';
import { BoqMaterialComponent } from './components/boq-material/boq-material.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { SmetaHomeComponent } from './smeta-home/smeta-home.component';
import { ResourceImportComponent } from './components/resource-import/resource-import.component';
import { BoqItemImportComponent } from './components/boq-item-import/boq-item-import.component';
import { BoqFormComponent } from './components/boq-form/boq-form.component';

@NgModule({
  declarations: [
    BoqListComponent,
    SmetaDashboardComponent,
    BoqDetailComponent,
    BoqItemListComponent,
    BoqItemDetailComponent,
    TradeFormComponent,
    LotFormComponent,
    BoqItemFormComponent,
    ConsumptionListComponent,
    ConsumptionFormComponent,
    ResourceFormComponent,
    BoqMaterialComponent,
    ResourceListComponent,
    SmetaHomeComponent,
    ResourceImportComponent,
    BoqItemImportComponent,
    BoqFormComponent
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
    ToastModule, 
    CheckboxModule, 
    ToolbarModule, 
    FileUploadModule, 
  ]
})
export class SmetaModule { }
