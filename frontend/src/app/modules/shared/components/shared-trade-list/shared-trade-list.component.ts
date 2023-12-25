import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseTrade } from 'src/app/modules/admin/models/base-trade.model';
import { Trade } from 'src/app/modules/common/models/trade.model';
import { BaseCompanyTrade } from 'src/app/modules/company/models/base-company-trade.model';

@Component({
  selector: 'app-shared-trade-list',
  templateUrl: './shared-trade-list.component.html',
  styleUrls: ['./shared-trade-list.component.scss']
})
export class SharedTradeListComponent implements OnInit {

  @Input() trades: BaseTrade[] | BaseCompanyTrade[] | Trade[];
  
  @Output() getTradesEventEmitter = new EventEmitter<any>();
  @Output() deleteTradeEventEmitter = new EventEmitter<string>();
  @Output() openCreateTradeFormEventEmitter = new EventEmitter<any>();
  @Output() openUpdateTradeFormEventEmitter = 
            new EventEmitter<BaseTrade | BaseCompanyTrade | Trade>();
  @Output() handleTradeFormCloseEventEventEmitter = 
            new EventEmitter<BaseTrade | BaseCompanyTrade | Trade>();
  @Output() openConsumptionListEventEmitter = new EventEmitter<any>();
  @Output() exportExcelEventEmitter = new EventEmitter<any>();
  @Output() openTradeImportFormEventEmitter = new EventEmitter<any>();
  @Output() handleTradeImportFormCloseEventEventEmitter = new EventEmitter<any>();
  
  tradeToEdit: BaseTrade | BaseCompanyTrade | Trade | null = null;

  constructor(
  ){}

  ngOnInit(): void {
    this.getTrades();
  }

  getTrades(queryParams?: string): void {
    this.getTradesEventEmitter.emit();
  }

  deleteTrade(id: string): void {
    this.deleteTradeEventEmitter.emit();
  }
  
  openCreateTradeForm(): void {
    this.openCreateTradeFormEventEmitter.emit();
  }

  openUpdateTradeForm(tradeToEdit: Trade): void {
    this.openUpdateTradeFormEventEmitter.emit();
  }
  
  handleTradeFormCloseEvent(trade: Trade | null): void {
    this.handleTradeFormCloseEventEventEmitter.emit();
  }

  openConsumptionList(trade: Trade): void {
    this.openConsumptionListEventEmitter.emit();
  }
  
  exportExcel(): void {
    this.exportExcelEventEmitter.emit();
  }

  openTradeImportForm(): void {
    this.openTradeImportFormEventEmitter.emit();
  }

  handleTradeImportFormCloseEvent(): void {
    this.handleTradeImportFormCloseEventEventEmitter.emit();
  }

}
