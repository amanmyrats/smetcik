import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyTrade } from '../../models/base-company-trade.model';
import { BaseCompanyTradeService } from '../../services/base-company-trade.service';

@Component({
  selector: 'app-base-company-trade-list',
  templateUrl: './base-company-trade-list.component.html',
  styleUrls: ['./base-company-trade-list.component.scss']
})
export class BaseCompanyTradeListComponent implements OnInit {

  baseCompanyTrades: BaseCompanyTrade[];
  baseCompanyTradeToEdit: BaseCompanyTrade | null = null;
  showBaseCompanyTradeForm: boolean = false;
  showBaseCompanyTradeImportForm: boolean = false;

  constructor(
    private baseCompanyTradeService: BaseCompanyTradeService, 
  ){}

  ngOnInit(): void {
    this.getBaseCompanyTrades();
  }

  getBaseCompanyTrades(queryParams?: string): void {
    this.baseCompanyTradeService.getBaseCompanyTrades(queryParams).subscribe({
      next: (paginatedBaseCompanyTrades: Paginated<BaseCompanyTrade>) => {
        this.baseCompanyTrades = paginatedBaseCompanyTrades.results!;
        console.log("Successfully fetched BaseCompanyUnits.");
        console.log(paginatedBaseCompanyTrades.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseCompanyUnits");
        console.log(err);
      }
    });
  }

  deleteBaseCompanyTrade(id: string): void {
    this.baseCompanyTradeService.deleteBaseCompanyTrade(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseCompanyTrade.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseCompanyTrade");
        console.log(err);
      }
    });
  }
  
  openCreateBaseCompanyTradeForm(): void {
    this.baseCompanyTradeToEdit = null;
    this.showBaseCompanyTradeForm = true;
  }

  openUpdateBaseCompanyTradeForm(baseCompanyTradeToEdit: BaseCompanyTrade): void {
    this.baseCompanyTradeToEdit = baseCompanyTradeToEdit;
    this.showBaseCompanyTradeForm = true;
  }
  
  handleBaseCompanyTradeFormCloseEvent(baseCompanyTrade: BaseCompanyTrade | null): void {
    console.log("received:");
    console.log(baseCompanyTrade);
    // this.updateTrades(null, null, baseCompanyTrade);
    this.getBaseCompanyTrades();
    this.showBaseCompanyTradeForm = false;
  }

  exportExcel(): void {
    this.baseCompanyTradeService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseCompanyUnits.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_company_trades.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting BaseCompanyUnits");
        console.log(err);
      }
    });
  }

  openBaseCompanyTradeImportForm(): void {
    this.showBaseCompanyTradeImportForm = true;
  }

  handleBaseCompanyTradeImportFormCloseEvent(): void {
    this.getBaseCompanyTrades();
    this.showBaseCompanyTradeImportForm = false;
  }

}