import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseLot } from 'src/app/modules/admin/models/base-lot.model';
import { Lot } from 'src/app/modules/common/models/lot.model';
import { BaseCompanyLot } from 'src/app/modules/company/models/base-company-lot.model';

@Component({
  selector: 'app-shared-lot-list',
  templateUrl: './shared-lot-list.component.html',
  styleUrls: ['./shared-lot-list.component.scss']
})
export class SharedLotListComponent implements OnInit {

  @Input() lots: BaseLot[] | BaseCompanyLot[] | Lot[];
  
  @Output() getLotsEventEmitter = new EventEmitter<any>();
  @Output() deleteLotEventEmitter = new EventEmitter<string>();
  @Output() openCreateLotFormEventEmitter = new EventEmitter<any>();
  @Output() openUpdateLotFormEventEmitter = 
            new EventEmitter<BaseLot | BaseCompanyLot | Lot>();
  @Output() handleLotFormCloseEventEventEmitter = 
            new EventEmitter<BaseLot | BaseCompanyLot | Lot>();
  @Output() openConsumptionListEventEmitter = new EventEmitter<any>();
  @Output() exportExcelEventEmitter = new EventEmitter<any>();
  @Output() openLotImportFormEventEmitter = new EventEmitter<any>();
  @Output() handleLotImportFormCloseEventEventEmitter = new EventEmitter<any>();
  
  lotToEdit: BaseLot | BaseCompanyLot | Lot | null = null;

  constructor(
  ){}

  ngOnInit(): void {
    this.getLots();
  }

  getLots(queryParams?: string): void {
    this.getLotsEventEmitter.emit();
  }

  deleteLot(id: string): void {
    this.deleteLotEventEmitter.emit();
  }
  
  openCreateLotForm(): void {
    this.openCreateLotFormEventEmitter.emit();
  }

  openUpdateLotForm(lotToEdit: Lot): void {
    this.openUpdateLotFormEventEmitter.emit();
  }
  
  handleLotFormCloseEvent(lot: Lot | null): void {
    this.handleLotFormCloseEventEventEmitter.emit();
  }

  openConsumptionList(lot: Lot): void {
    this.openConsumptionListEventEmitter.emit();
  }
  
  exportExcel(): void {
    this.exportExcelEventEmitter.emit();
  }

  openLotImportForm(): void {
    this.openLotImportFormEventEmitter.emit();
  }

  handleLotImportFormCloseEvent(): void {
    this.handleLotImportFormCloseEventEventEmitter.emit();
  }

}
