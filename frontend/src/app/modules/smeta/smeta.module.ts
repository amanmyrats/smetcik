import { NgModule } from '@angular/core';

import { SmetaRoutingModule } from './smeta-routing.module';
import { BoqListComponent } from './components/boq-list/boq-list.component';
import { SmetaDashboardComponent } from './smeta-dashboard/smeta-dashboard.component';
import { BoqDetailComponent } from './components/boq-detail/boq-detail.component';
import { BoqItemListComponent } from './components/boq-item-list/boq-item-list.component';
import { BoqItemDetailComponent } from './components/boq-item-detail/boq-item-detail.component';
import { TradeFormComponent } from './components/trade-form/trade-form.component';
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
import { SharedModule } from '../shared/shared.module';

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
    SmetaRoutingModule,

    SharedModule, 
  ],
})
export class SmetaModule { }
