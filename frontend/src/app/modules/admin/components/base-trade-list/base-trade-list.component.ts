import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseTrade } from '../../models/base-trade.model';
import { BaseTradeService } from '../../services/base-trade.service';

@Component({
  selector: 'app-base-trade-list',
  templateUrl: './base-trade-list.component.html',
  styleUrls: ['./base-trade-list.component.scss']
})
export class BaseTradeListComponent implements OnInit {

  baseTrades: BaseTrade[];
  baseTradeToEdit: BaseTrade | null = null;
  showBaseTradeForm: boolean = false;
  showBaseTradeImportForm: boolean = false;

  constructor(
    private baseTradeService: BaseTradeService, 
  ){}

  ngOnInit(): void {
    this.getBaseTrades();
  }

  getBaseTrades(queryParams?: string): void {
    this.baseTradeService.getBaseTrades(queryParams).subscribe({
      next: (paginatedBaseTrades: Paginated<BaseTrade>) => {
        this.baseTrades = paginatedBaseTrades.results!;
        console.log("Successfully fetched BaseTrades.");
        console.log(paginatedBaseTrades.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseTrades");
        console.log(err);
      }
    });
  }

  deleteBaseTrade(id: string): void {
    this.baseTradeService.deleteBaseTrade(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseTrade.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseTrade");
        console.log(err);
      }
    });
  }
  
  openCreateBaseTradeForm(): void {
    this.baseTradeToEdit = null;
    this.showBaseTradeForm = true;
  }

  openUpdateBaseTradeForm(baseTradeToEdit: BaseTrade): void {
    this.baseTradeToEdit = baseTradeToEdit;
    this.showBaseTradeForm = true;
  }
  
  handleBaseTradeFormCloseEvent(baseTrade: BaseTrade | null): void {
    console.log("received:");
    console.log(baseTrade);
    // this.updateTrades(null, null, baseTrade);
    this.getBaseTrades();
    this.showBaseTradeForm = false;
  }

  exportExcel(): void {
    this.baseTradeService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseTrades.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_trades.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting BaseTrades");
        console.log(err);
      }
    });
  }

  openBaseTradeImportForm(): void {
    this.showBaseTradeImportForm = true;
  }

  handleBaseTradeImportFormCloseEvent(): void {
    this.getBaseTrades();
    this.showBaseTradeImportForm = false;
  }

}