import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { BaseResource } from 'src/app/modules/admin/models/base-resource.model';
import { BaseCompanyResource } from 'src/app/modules/company/models/base-company-resource.model';
import { Resource } from 'src/app/modules/smeta/models/resource.model';
import { FilterSearchComponent } from '../filter-search/filter-search.component';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-shared-resource-list',
  templateUrl: './shared-resource-list.component.html',
  styleUrls: ['./shared-resource-list.component.scss']
})
export class SharedResourceListComponent implements OnInit, AfterViewInit  {
  @ViewChild('paginator', { static: true }) paginator: Paginator;
  @ViewChild(FilterSearchComponent) filterSearchComponent!: FilterSearchComponent;
  
  @Input() first: number = 0;
  @Input() rows: number = 5;
  @Input() totalRecords: number;
  @Input() rootPathSegment: string;
  @Input() calledOnPageChange: boolean = false;

  @Input() resources: BaseResource[] | BaseCompanyResource[] | Resource[];
  
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
  
  @Output() getResourcesEventEmitter = new EventEmitter<any>();
  @Output() deleteResourceEventEmitter = new EventEmitter<string>();
  @Output() openCreateResourceFormEventEmitter = new EventEmitter<any>();
  @Output() openUpdateResourceFormEventEmitter = 
            new EventEmitter<BaseResource | BaseCompanyResource | Resource>();
  @Output() handleResourceFormCloseEventEventEmitter = 
            new EventEmitter<BaseResource | BaseCompanyResource | Resource>();
  @Output() openConsumptionListEventEmitter = new EventEmitter<any>();
  @Output() exportExcelEventEmitter = new EventEmitter<any>();
  @Output() openResourceImportFormEventEmitter = new EventEmitter<any>();
  @Output() handleResourceImportFormCloseEventEventEmitter = new EventEmitter<any>();
  
  resourceToEdit: BaseResource | BaseCompanyResource | Resource | null = null;

  constructor(
    ){}

  ngOnInit(): void {
    // this.getResources();
  }

  ngAfterViewInit(): void {
    this.initializeResources();
  }

  private initializeResources(): void {
    this.getResources(this.filterSearchComponent.queryParams);
    this.filterSearchComponent.updateUrl(this.rootPathSegment, this.filterSearchComponent.queryParams);
  }

  getResources(queryParams?: string): void {
    this.getResourcesEventEmitter.emit(queryParams);
  }

  deleteResource(id: string): void {
    this.deleteResourceEventEmitter.emit();
  }

  openCreateResourceForm(): void {
    this.openCreateResourceFormEventEmitter.emit();
  }

  openUpdateResourceForm(resourceToEdit: Resource): void {
    this.openUpdateResourceFormEventEmitter.emit();
  }
  
  handleResourceFormCloseEvent(resource: Resource | null): void {
    this.handleResourceFormCloseEventEventEmitter.emit();
  }

  openConsumptionList(resource: Resource): void {
    this.openConsumptionListEventEmitter.emit();
  }
  
  exportExcel(): void {
    this.exportExcelEventEmitter.emit();
  }

  openResourceImportForm(): void {
    this.openResourceImportFormEventEmitter.emit();
  }

  handleResourceImportFormCloseEvent(): void {
    this.handleResourceImportFormCloseEventEventEmitter.emit();
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
    this.getResources(this.filterSearchComponent.queryParams);
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
    this.initializeResources();
  }
}
