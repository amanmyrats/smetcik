import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseBoqItem } from 'src/app/modules/admin/models/base-boq-item.model';
import { BaseCompanyBoqItem } from 'src/app/modules/company/models/base-company-boq-item.model';
import { BoqItem } from 'src/app/modules/smeta/models/boq-item.model';

@Component({
  selector: 'app-shared-boq-item-list',
  templateUrl: './shared-boq-item-list.component.html',
  styleUrls: ['./shared-boq-item-list.component.scss']
})
export class SharedBoqItemListComponent implements OnInit {

  @Input() boqItems: BaseBoqItem[] | BaseCompanyBoqItem[] | BoqItem[];
  
  @Output() getBoqItemsEventEmitter = new EventEmitter<any>();
  @Output() deleteBoqItemEventEmitter = new EventEmitter<string>();
  @Output() openCreateBoqItemFormEventEmitter = new EventEmitter<any>();
  @Output() openUpdateBoqItemFormEventEmitter = 
            new EventEmitter<BaseBoqItem | BaseCompanyBoqItem | BoqItem>();
  @Output() handleBoqItemFormCloseEventEventEmitter = 
            new EventEmitter<BaseBoqItem | BaseCompanyBoqItem | BoqItem>();
  @Output() openConsumptionListEventEmitter = new EventEmitter<any>();
  @Output() exportExcelEventEmitter = new EventEmitter<any>();
  @Output() openBoqItemImportFormEventEmitter = new EventEmitter<any>();
  @Output() handleBoqItemImportFormCloseEventEventEmitter = new EventEmitter<any>();
  
  boqItemToEdit: BoqItem | BaseCompanyBoqItem | BoqItem | null = null;
  currentBoqItem: BoqItem | BaseCompanyBoqItem | BoqItem;

  constructor(
  ){}

  ngOnInit(): void {
    this.getBoqItems();
  }

  getBoqItems(queryParams?: string): void {
    this.getBoqItemsEventEmitter.emit();
  }

  deleteBoqItem(id: string): void {
    this.deleteBoqItemEventEmitter.emit();
  }
  
  openCreateBoqItemForm(): void {
    this.openCreateBoqItemFormEventEmitter.emit();
  }

  openUpdateBoqItemForm(boqItemToEdit: BoqItem): void {
    this.openUpdateBoqItemFormEventEmitter.emit();
  }
  
  handleBoqItemFormCloseEvent(baseBoqItem: BoqItem | null): void {
    this.handleBoqItemFormCloseEventEventEmitter.emit();
  }

  openConsumptionList(baseBoqItem: BoqItem): void {
    this.openConsumptionListEventEmitter.emit();
  }
  
  exportExcel(): void {
    this.exportExcelEventEmitter.emit();
  }

  openBoqItemImportForm(): void {
    this.openBoqItemImportFormEventEmitter.emit();
  }

  handleBoqItemImportFormCloseEvent(): void {
    this.handleBoqItemImportFormCloseEventEventEmitter.emit();
  }

}
