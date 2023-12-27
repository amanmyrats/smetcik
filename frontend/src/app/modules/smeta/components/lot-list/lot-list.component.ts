import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { Lot } from 'src/app/modules/common/models/lot.model';
import { LotService } from 'src/app/modules/common/services/lot.service';

@Component({
  selector: 'app-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.scss']
})
export class LotListComponent implements OnInit {

  lots: Lot[];
  lotToEdit: Lot | null = null;
  showLotForm: boolean = false;
  showLotImportForm: boolean = false;

  constructor(
    private lotService: LotService, 
  ){}

  ngOnInit(): void {
    this.getLots();
  }

  getLots(queryParams?: string): void {
    this.lotService.getLots(queryParams).subscribe({
      next: (paginatedLots: Paginated<Lot>) => {
        this.lots = paginatedLots.results!;
        console.log("Successfully fetched Lots.");
        console.log(paginatedLots.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Lots");
        console.log(err);
      }
    });
  }

  deleteLot(id: string): void {
    this.lotService.deleteLot(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted Lot.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting Lot");
        console.log(err);
      }
    });
  }
  
  openCreateLotForm(): void {
    this.lotToEdit = null;
    this.showLotForm = true;
  }

  openUpdateLotForm(lotToEdit: Lot): void {
    this.lotToEdit = lotToEdit;
    this.showLotForm = true;
  }
  
  handleLotFormCloseEvent(lot: Lot | null): void {
    console.log("received:");
    console.log(lot);
    // this.updateLots(null, null, lot);
    this.getLots();
    this.showLotForm = false;
  }

  exportExcel(): void {
    this.lotService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported Lots.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'lots.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting Lots");
        console.log(err);
      }
    });
  }

  openLotImportForm(): void {
    this.showLotImportForm = true;
  }

  handleLotImportFormCloseEvent(): void {
    this.getLots();
    this.showLotImportForm = false;
  }

}