import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseResource } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

@Component({
  selector: 'app-base-resource-list',
  templateUrl: './base-resource-list.component.html',
  styleUrls: ['./base-resource-list.component.scss']
})
export class BaseResourceListComponent  implements OnInit {

  baseResources: BaseResource[];
  baseResourceToEdit: BaseResource | null = null;
  showBaseResourceForm: boolean = false;
  showBaseResourceImportForm: boolean = false;

  constructor(
    private baseResourceService: BaseResourceService, 
  ){}

  ngOnInit(): void {
    this.getBaseResources();
  }

  getBaseResources(queryParams?: string): void {
    this.baseResourceService.getBaseResources(queryParams).subscribe({
      next: (paginatedBaseResources: Paginated<BaseResource>) => {
        this.baseResources = paginatedBaseResources.results!;
        console.log("Successfully fetched Base Resources.");
        console.log(paginatedBaseResources.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Base Resources");
        console.log(err);
      }
    });
  }

  deleteBaseResource(id: string): void {
    this.baseResourceService.deleteBaseResource(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseResource.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseResource");
        console.log(err);
      }
    });
  }
  
  openCreateBaseResourceForm(): void {
    this.baseResourceToEdit = null;
    this.showBaseResourceForm = true;
  }

  openUpdateBaseResourceForm(baseResourceToEdit: BaseResource): void {
    this.baseResourceToEdit = baseResourceToEdit;
    this.showBaseResourceForm = true;
  }
  
  handleBaseResourceFormCloseEvent(baseResource: BaseResource | null): void {
    console.log("received:");
    console.log(baseResource);
    // this.updateResources(null, null, baseResource);
    this.getBaseResources();
    this.showBaseResourceForm = false;
  }

  exportExcel(): void {
    this.baseResourceService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported Base Resources.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_resources.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting Base Resources");
        console.log(err);
      }
    });
  }

  openBaseResourceImportForm(): void {
    this.showBaseResourceImportForm = true;
  }

  handleBaseResourceImportFormCloseEvent(): void {
    this.getBaseResources();
    this.showBaseResourceImportForm = false;
  }

}