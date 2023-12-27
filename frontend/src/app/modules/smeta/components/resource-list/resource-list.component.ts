import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, SortEvent } from 'primeng/api';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { UnitService } from 'src/app/modules/common/services/unit.service';
import { Paginated } from 'src/app/models/paginated.model';
import { FilterSearchComponent } from 'src/app/modules/shared/components/filter-search/filter-search.component';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit, AfterViewInit{
  @ViewChild('paginator', { static: true }) paginator: Paginator;
  @ViewChild(FilterSearchComponent) filterSearchComponent!: FilterSearchComponent;

  resources: Resource[];
  resourceToUpdate: Resource | null;
  showResourceForm: boolean = false;
  showResourceImportForm: boolean = false;

  first: number = 0;
  rows: number = 5;
  totalRecords: number;

  rootPathSegment: string = '/smeta/boqs/1/resources';
  calledOnPageChange: boolean = false;


  constructor(
    private resourceService: ResourceService, 
    ){}

  ngOnInit(): void {
      this.getResources();
  }
  
  ngAfterViewInit(): void {
    this.initializeResources();
  }
  
  private initializeResources(): void {
    this.getResources(this.filterSearchComponent.queryParams);
    this.filterSearchComponent.updateUrl(this.rootPathSegment, this.filterSearchComponent.queryParams);
  }
  
    getResources(queryParams?: string): void {
      this.resourceService.getResources(queryParams).subscribe({
        next: (paginatedResources: Paginated<Resource>) => {
          console.log("Successfully received Resources.");
          console.log(paginatedResources);
          this.resources = paginatedResources.results!;
          this.filterSearchComponent.totalRecords = paginatedResources.count! as unknown as number;
          this.first = this.filterSearchComponent.first;
          this.rows = this.filterSearchComponent.rows;
          this.totalRecords = this.filterSearchComponent.totalRecords;
        }, 
        error: (err: any) => {
          console.log("Error when fetching Resources.");
          console.log(err);
        }
      });
    }

  openCreateResourceForm(): void {
    this.resourceToUpdate = null;
    this.showResourceForm = true;
  }

  openUpdateResourceForm(resource: Resource): void {
    this.resourceToUpdate = resource;
    this.showResourceForm = true;
  }

  deleteResource(id: string): void {
    this.resourceService.deleteResource(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted Resource.");
        console.log(data);
        this.getResources();
      }, 
      error: (err: any) => {
        console.log("Failed to delete Resource.");
        console.log(err);
      }
    });
  }

  handleResourceFormCloseEvent(resource: Resource): void {
    this.getResources();
    this.showResourceForm = false;
  }

  customSort(event: SortEvent) {

      event.data!.sort((data1, data2) => {
        let value1 = data1[event.field!];
        let value2 = data2[event.field!];
        let result = null;
        
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        
        return event.order! * result;
      });
}

exportExcel(): void {
  this.resourceService.exportToExcel().subscribe({

    next: (response: any) => {
      // Create a Blob from the response
      const blob = new Blob([response], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'resources.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
    },
    error: (error: any) => {
      console.error('Error exporting to Excel', error);
      // Handle error, e.g., show an error message
    }
  }
  );
}

importFromExcel(event: any): void {
  console.log("event: " + event);
  console.log(event);
}

openResourceImportForm(): void {
  this.showResourceImportForm = true;
}

handleResourceImportFormCloseEvent(): void {
  this.getResources();
  this.showResourceImportForm = false;
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
