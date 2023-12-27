import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { BaseBoqItem } from 'src/app/modules/admin/models/base-boq-item.model';
import { BaseCompanyBoqItem } from 'src/app/modules/company/models/base-company-boq-item.model';
import { BoqItem } from 'src/app/modules/smeta/models/boq-item.model';
import { FilterSearchComponent } from '../filter-search/filter-search.component';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-shared-boq-item-list',
  templateUrl: './shared-boq-item-list.component.html',
  styleUrls: ['./shared-boq-item-list.component.scss']
})
export class SharedBoqItemListComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator', { static: true }) paginator: Paginator;
  @ViewChild(FilterSearchComponent) filterSearchComponent!: FilterSearchComponent;

  @Input() boqItems: BaseBoqItem[] | BaseCompanyBoqItem[] | BoqItem[];
  @Input() first: number = 0;
  @Input() rows: number = 5;
  @Input() totalRecords: number;
  @Input() rootPathSegment: string;
  @Input() calledOnPageChange: boolean = false;

  @Input() wantSearch: boolean = true;
  @Input() wantCompany: boolean = false;
  @Input() wantProject: boolean = false;
  @Input() wantBoq: boolean = false;

  @Input() wantTrade: boolean = false;
  @Input() wantLot: boolean = false;
  @Input() wantCountry: boolean = false;

  @Input() wantBaseTrade: boolean = false;
  @Input() wantBaseLot: boolean = false;
  @Input() wantBaseCountry: boolean = false;

  @Input() wantBaseCompanyTrade: boolean = false;
  @Input() wantBaseCompanyLot: boolean = false;
  @Input() wantBaseCompanyCountry: boolean = false;
  
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
    // this.initializeBoqItems();
  }
  
  ngAfterViewInit(): void {
    this.initializeBoqItems();
  }

  private initializeBoqItems(): void {
    this.getBoqItems(this.filterSearchComponent.queryParams);
    this.filterSearchComponent.updateUrl(this.rootPathSegment, this.filterSearchComponent.queryParams);
  }

  getBoqItems(queryParams?: string): void {
    this.getBoqItemsEventEmitter.emit(queryParams);
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

  
  

  onPageChange(event: LazyLoadEvent | any) {
    this.calledOnPageChange = true;
    this.filterSearchComponent.lazyLoadEvent.first = event.first;
    this.filterSearchComponent.lazyLoadEvent.rows = event.rows;
    this.filterSearchComponent.lazyLoadEvent.filters = this.filterSearchComponent.filterSearchForm.value;
    if (!this.filterSearchComponent.lazyLoadEvent.sortField) {
      this.filterSearchComponent.lazyLoadEvent.sortField = 'id';
    }

    this.filterSearchComponent.queryParams = this.filterSearchComponent.commonService.buildPaginationParams(this.filterSearchComponent.lazyLoadEvent);
    this.getBoqItems(this.filterSearchComponent.queryParams);
    this.filterSearchComponent.updateUrl(this.rootPathSegment, this.filterSearchComponent.queryParams);

  }

  handleFilterChange(): void {
    this.calledOnPageChange = false;
    this.paginator.changePage(0);
    if (!this.calledOnPageChange) {
      this.onPageChange(this.filterSearchComponent.lazyLoadEvent);
    }
  }

  handleSearchSubmit(): void {
    if (this.filterSearchComponent.filterSearchForm.valid) {
      this.paginator.changePage(0);
    }
  }

  handleClearSearch(): void {
    this.initializeBoqItems();
  }

}
