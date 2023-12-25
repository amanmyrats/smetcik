import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseResource } from 'src/app/modules/admin/models/base-resource.model';
import { BaseCompanyResource } from 'src/app/modules/company/models/base-company-resource.model';
import { Resource } from 'src/app/modules/smeta/models/resource.model';

@Component({
  selector: 'app-shared-resource-list',
  templateUrl: './shared-resource-list.component.html',
  styleUrls: ['./shared-resource-list.component.scss']
})
export class SharedResourceListComponent implements OnInit {

  @Input() resources: BaseResource[] | BaseCompanyResource[] | Resource[];
  
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
    this.getResources();
  }

  getResources(queryParams?: string): void {
    this.getResourcesEventEmitter.emit();
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

}
