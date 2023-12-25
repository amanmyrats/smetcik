import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseLot } from '../../models/base-lot.model';
import { BaseLotService } from '../../services/base-lot.service';

@Component({
  selector: 'app-base-lot-list',
  templateUrl: './base-lot-list.component.html',
  styleUrls: ['./base-lot-list.component.scss']
})
export class BaseLotListComponent implements OnInit {

  baseLots: BaseLot[];
  baseLotToEdit: BaseLot | null = null;
  showBaseLotForm: boolean = false;
  showBaseLotImportForm: boolean = false;

  constructor(
    private baseLotService: BaseLotService, 
  ){}

  ngOnInit(): void {
    this.getBaseLots();
  }

  getBaseLots(queryParams?: string): void {
    this.baseLotService.getBaseLots(queryParams).subscribe({
      next: (paginatedBaseLots: Paginated<BaseLot>) => {
        this.baseLots = paginatedBaseLots.results!;
        console.log("Successfully fetched BaseUnits.");
        console.log(paginatedBaseLots.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseUnits");
        console.log(err);
      }
    });
  }

  deleteBaseLot(id: string): void {
    this.baseLotService.deleteBaseLot(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseLot.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseLot");
        console.log(err);
      }
    });
  }
  
  openCreateBaseLotForm(): void {
    this.baseLotToEdit = null;
    this.showBaseLotForm = true;
  }

  openUpdateBaseLotForm(baseLotToEdit: BaseLot): void {
    this.baseLotToEdit = baseLotToEdit;
    this.showBaseLotForm = true;
  }
  
  handleBaseLotFormCloseEvent(baseLot: BaseLot | null): void {
    console.log("received:");
    console.log(baseLot);
    // this.updateLots(null, null, baseLot);
    this.getBaseLots();
    this.showBaseLotForm = false;
  }

  exportExcel(): void {
    this.baseLotService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseUnits.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_lots.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting BaseUnits");
        console.log(err);
      }
    });
  }

  openBaseLotImportForm(): void {
    this.showBaseLotImportForm = true;
  }

  handleBaseLotImportFormCloseEvent(): void {
    this.getBaseLots();
    this.showBaseLotImportForm = false;
  }

}