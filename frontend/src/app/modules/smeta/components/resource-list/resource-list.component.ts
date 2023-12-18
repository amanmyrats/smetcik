import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { UnitService } from 'src/app/modules/common/services/unit.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit{

  resources: Resource[];
  resourceToUpdate: Resource | null;
  showResourceForm: boolean = false;

  constructor(
    private resourceService: ResourceService, 
    ){}

  ngOnInit(): void {
      this.getResources();
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

  getResources(): void {
    this.resourceService.getResources().subscribe({
      next: (resources: Resource[]) => {
        console.log("Successfully received Resources.");
        console.log(resources);
        this.resources = resources;
      }, 
      error: (err: any) => {
        console.log("Error when fetching Resources.");
        console.log(err);
      }
    });
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

}

importFromExcel(): void {
  
}
}
