import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyResource } from '../../models/base-company-resource.model';
import { BaseCompanyResourceService } from '../../services/base-company-resource.service';

@Component({
  selector: 'app-base-company-resource-list',
  templateUrl: './base-company-resource-list.component.html',
  styleUrls: ['./base-company-resource-list.component.scss']
})
export class BaseCompanyResourceListComponent  implements OnInit {

  baseCompanyResources: BaseCompanyResource[];
  baseCompanyResourceToEdit: BaseCompanyResource | null = null;
  showBaseCompanyResourceForm: boolean = false;
  showBaseCompanyResourceImportForm: boolean = false;
  
  totalRecords: number;
  rootPathSegment: string = '/company/resources/';

  constructor(
    private baseCompanyResourceService: BaseCompanyResourceService, 
  ){}

  ngOnInit(): void {
    // this.getBaseCompanyResources();
  }

  getBaseCompanyResources(queryParams?: string): void {
    this.baseCompanyResourceService.getBaseCompanyResources(queryParams).subscribe({
      next: (paginatedBaseCompanyResources: Paginated<BaseCompanyResource>) => {
        this.baseCompanyResources = paginatedBaseCompanyResources.results!;
        this.totalRecords = paginatedBaseCompanyResources.count! as unknown as number;
        console.log("Successfully fetched Base Company Resources.");
        console.log(paginatedBaseCompanyResources.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Base Company Resources");
        console.log(err);
      }
    });
  }

  deleteBaseCompanyResource(id: string): void {
    this.baseCompanyResourceService.deleteBaseCompanyResource(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseCompanyResource.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseCompanyResource");
        console.log(err);
      }
    });
  }
  
  openCreateBaseCompanyResourceForm(): void {
    this.baseCompanyResourceToEdit = null;
    this.showBaseCompanyResourceForm = true;
  }

  openUpdateBaseCompanyResourceForm(baseCompanyResourceToEdit: BaseCompanyResource): void {
    this.baseCompanyResourceToEdit = baseCompanyResourceToEdit;
    this.showBaseCompanyResourceForm = true;
  }
  
  handleBaseCompanyResourceFormCloseEvent(baseCompanyResource: BaseCompanyResource | null): void {
    console.log("received:");
    console.log(baseCompanyResource);
    // this.updateResources(null, null, baseCompanyResource);
    this.getBaseCompanyResources();
    this.showBaseCompanyResourceForm = false;
  }

  exportExcel(): void {
    this.baseCompanyResourceService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported Base Company Resources.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_company_resources.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting Base Company Resources");
        console.log(err);
      }
    });
  }

  openBaseCompanyResourceImportForm(): void {
    this.showBaseCompanyResourceImportForm = true;
  }

  handleBaseCompanyResourceImportFormCloseEvent(): void {
    this.getBaseCompanyResources();
    this.showBaseCompanyResourceImportForm = false;
  }

}