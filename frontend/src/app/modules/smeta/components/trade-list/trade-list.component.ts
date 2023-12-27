import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { Trade } from 'src/app/modules/common/models/trade.model';
import { TradeService } from 'src/app/modules/common/services/trade.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.scss']
})
export class TradeListComponent implements OnInit {

  trades: Trade[];
  tradeToEdit: Trade | null = null;
  showTradeForm: boolean = false;
  showTradeImportForm: boolean = false;

  constructor(
    private tradeService: TradeService, 
  ){}

  ngOnInit(): void {
    this.getTrades();
  }

  getTrades(queryParams?: string): void {
    this.tradeService.getTrades(queryParams).subscribe({
      next: (paginatedTrades: Paginated<Trade>) => {
        this.trades = paginatedTrades.results!;
        console.log("Successfully fetched Trades.");
        console.log(paginatedTrades.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Trades");
        console.log(err);
      }
    });
  }

  deleteTrade(id: string): void {
    this.tradeService.deleteTrade(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted Trade.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting Trade");
        console.log(err);
      }
    });
  }
  
  openCreateTradeForm(): void {
    this.tradeToEdit = null;
    this.showTradeForm = true;
  }

  openUpdateTradeForm(tradeToEdit: Trade): void {
    this.tradeToEdit = tradeToEdit;
    this.showTradeForm = true;
  }
  
  handleTradeFormCloseEvent(trade: Trade | null): void {
    console.log("received:");
    console.log(trade);
    // this.updateTrades(null, null, trade);
    this.getTrades();
    this.showTradeForm = false;
  }

  exportExcel(): void {
    this.tradeService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported Trades.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'trades.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting Trades");
        console.log(err);
      }
    });
  }

  openTradeImportForm(): void {
    this.showTradeImportForm = true;
  }

  handleTradeImportFormCloseEvent(): void {
    this.getTrades();
    this.showTradeImportForm = false;
  }

}