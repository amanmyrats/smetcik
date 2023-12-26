import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyLot } from '../../models/base-company-lot.model';
import { BaseCompanyLotService } from '../../services/base-company-lot.service';

@Component({
  selector: 'app-base-company-lot-list',
  templateUrl: './base-company-lot-list.component.html',
  styleUrls: ['./base-company-lot-list.component.scss']
})
export class BaseCompanyLotListComponent  implements OnInit {

  baseCompanyLots: BaseCompanyLot[];
  baseCompanyLotToEdit: BaseCompanyLot | null = null;
  showBaseCompanyLotForm: boolean = false;
  showBaseCompanyLotImportForm: boolean = false;

  constructor(
    private baseCompanyLotService: BaseCompanyLotService, 
  ){}

  ngOnInit(): void {
    this.getBaseCompanyLots();
  }

  getBaseCompanyLots(queryParams?: string): void {
    this.baseCompanyLotService.getBaseCompanyLots(queryParams).subscribe({
      next: (paginatedBaseCompanyLots: Paginated<BaseCompanyLot>) => {
        this.baseCompanyLots = paginatedBaseCompanyLots.results!;
        console.log("Successfully fetched BaseCompanyLots.");
        console.log(paginatedBaseCompanyLots.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseCompanyLots");
        console.log(err);
      }
    });
  }

  deleteBaseCompanyLot(id: string): void {
    this.baseCompanyLotService.deleteBaseCompanyLot(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseCompanyLot.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseCompanyLot");
        console.log(err);
      }
    });
  }
  
  openCreateBaseCompanyLotForm(): void {
    this.baseCompanyLotToEdit = null;
    this.showBaseCompanyLotForm = true;
  }

  openUpdateBaseCompanyLotForm(baseCompanyLotToEdit: BaseCompanyLot): void {
    this.baseCompanyLotToEdit = baseCompanyLotToEdit;
    this.showBaseCompanyLotForm = true;
  }
  
  handleBaseCompanyLotFormCloseEvent(baseCompanyLot: BaseCompanyLot | null): void {
    console.log("received:");
    console.log(baseCompanyLot);
    // this.updateLots(null, null, baseCompanyLot);
    this.getBaseCompanyLots();
    this.showBaseCompanyLotForm = false;
  }

  exportExcel(): void {
    this.baseCompanyLotService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseCompanyLots.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_company_lots.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting BaseCompanyLots");
        console.log(err);
      }
    });
  }

  openBaseCompanyLotImportForm(): void {
    this.showBaseCompanyLotImportForm = true;
  }

  handleBaseCompanyLotImportFormCloseEvent(): void {
    this.getBaseCompanyLots();
    this.showBaseCompanyLotImportForm = false;
  }

}