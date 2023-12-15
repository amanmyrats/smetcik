import { Component, Input } from '@angular/core';
import { Trade } from 'src/app/modules/common/models/trade.model';
import { TradeService } from 'src/app/modules/common/services/trade.service';
import { BoqItem } from '../../models/boq-item.model';
import { BoqItemService } from '../../services/boq-item.service';
import { Lot } from 'src/app/modules/common/models/lot.model';
import { LotService } from 'src/app/modules/common/services/lot.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boq-item-list',
  templateUrl: './boq-item-list.component.html',
  styleUrls: ['./boq-item-list.component.scss']
})
export class BoqItemListComponent {
  
  boqIdFromUrl: string | null = null;
  trades: Trade[] = [];
  tradesDynamic: Trade[] = [];
  lots: Lot[] = [];
  boqItems: BoqItem[] = [];

  showTradeForm: boolean = false;
  showLotForm: boolean = false;
  showBoqItemForm: boolean = false;
  showConsumptionList: boolean = false;

  lotToEdit: Lot | null = null;
  boqItemToEdit: BoqItem | null = null;
  tradeToEdit: Trade | null = null;

  currentTradeId: string;
  currentLotId: string;
  currentBoqItem: BoqItem;

  constructor(
    private tradeService: TradeService, 
    private boqItemService: BoqItemService, 
    private lotService: LotService, 
    private route: ActivatedRoute, 
  ){
    this.getTrades();
    this.boqIdFromUrl = this.route.snapshot.paramMap.get('boqId');
  }

  getTrades(): void {
    this.tradeService.getTrades().subscribe({
      next: (trades: Trade[]) => {
        this.trades = trades;
        this.tradesDynamic = trades;
        console.log("Trades fetched successfully");
        console.log(trades);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Trades");
        console.log(err);
      }
    });
  }
  
  openCreateTradeForm(): void {
    this.tradeToEdit = null;
    this.showTradeForm = true;
  }
  
  openUpdateTradeForm(tradeToEdit: Trade): void {
    this.showTradeForm = true;
    this.tradeToEdit = tradeToEdit;
  }

  deleteTrade(id: string): void {
    this.tradeService.deleteTrade(id).subscribe({
      next: (data: any) => {
        console.log("Succussfully deleted Trade");
        this.removeFromTrades(id, null, null);
      }, 
      error: (err: any) => {
        console.log("Error happened when deleting");
        console.log(err);
      }
    });
  }

  handleTradeFormCloseEvent(trade: Trade | null): void {
    console.log("received:");
    console.log(trade);
    this.updateTrades(trade, null, null);
    this.showTradeForm = false;
  }

  openCreateLotForm(tradeId: string): void {
    this.currentTradeId = tradeId;
    this.showLotForm = true;
  }

  openUpdateLotForm(tradeId: string, lotToEdit: Lot): void {
    this.currentTradeId = tradeId;
    this.showLotForm = true;
    this.lotToEdit = lotToEdit;
  }

  deleteLot(id: string): void {
    this.lotService.deleteLot(id).subscribe({
      next: (data: any) => {
        console.log("Lot was deteled successfully.");
        console.log(data);
        this.removeFromTrades(null, id, null);
      },
      error: (err: any) => {
        console.log("Failed to delete Lot.");
        console.log(err);
      }
    });
  }

  handleLotFormCloseEvent(lot: Lot | null): void {
    console.log("received:");
    console.log(lot);
    this.updateTrades(null, lot, null);
    this.showLotForm = false;
  }

  openCreateBoqItemForm(lotId: string, lots: Lot[]): void {
    this.currentLotId = lotId;
    this.lots = lots;
    this.boqItemToEdit = null;
    this.showBoqItemForm = true;
  }

  openUpdateBoqItemForm(lotId: string, lots: Lot[], boqItemToEdit: BoqItem): void {
    this.currentLotId = lotId;
    this.lots = lots;
    this.boqItemToEdit = boqItemToEdit;
    this.showBoqItemForm = true;
  }

  deleteBoqItem(id: string): void {
    this.boqItemService.deleteBoqItem(id).subscribe({
      next: (data: any) => {
        console.log("BoqItem was deteled successfully.");
        console.log(data);
        this.removeFromTrades(null, null, id);
      },
      error: (err: any) => {
        console.log("Failed to delete BoqItem.");
        console.log(err);
      }
    });
  }

  handleBoqItemFormCloseEvent(boqItem: BoqItem | null): void {
    console.log("received:");
    console.log(boqItem);
    this.updateTrades(null, null, boqItem);
    this.showBoqItemForm = false;
  }

  openConsumptionList(boqItem: BoqItem): void {
    this.showConsumptionList = true;
    this.currentBoqItem = boqItem;
  }
  
  updateTrades(updatedTrade: Trade | null, updatedLot: Lot | null, updatedBoqItem: BoqItem | null): void {
    if (updatedTrade) {
      const existingTradeIndex = this.trades.findIndex(trade => trade.id === updatedTrade.id);

      if (existingTradeIndex !== -1) {
        // If trade is in the list, update it
        this.trades[existingTradeIndex] = updatedTrade;
      } else {
        // If trade is not in the list, add it
        this.trades.push(updatedTrade);
      }
    }

    if (updatedLot) {
      // Find the parent trade based on trade_id
      const parentTrade = this.trades.find(trade => trade.id === updatedLot.trade);
  
      if (parentTrade) {
        // Check if the lot already exists under the parent trade
        const existingLotIndex = (parentTrade.lots || []).findIndex(lot => lot.id === updatedLot.id);
  
        if (existingLotIndex !== -1) {
          // If lot is in the list, update it
          parentTrade.lots![existingLotIndex] = updatedLot;
        } else {
          // If lot is not in the list, add it
          parentTrade.lots = parentTrade.lots || [];
          parentTrade.lots.push(updatedLot);
        }
      }
    }

    if (updatedBoqItem) {
      // Use the lot from the boqItem
      const parentLotId = updatedBoqItem.lot;
      var parentLot: Lot | null = null;
      console.log("parentLot: " + parentLot);
      if (parentLotId) {
        // Find the parent trade based on the lot's trade_id
        var parentTrade: Trade | null = null;
        for (let trade of this.trades) {
          for (let lot of trade.lots!) {
            if (lot.id === parentLotId) {
              parentTrade = trade;
              parentLot = lot;
            }
          }
        }
        console.log("parentTrade: " + parentTrade);
        
        if (parentTrade) {
          // Check if the boqItem already exists under the parent lot
          const existingLotIndex = (parentTrade.lots || []).findIndex(lot => lot.id === parentLot);
          const existingBoqItemIndex = (parentLot!.boq_items || []).findIndex(boqItem => boqItem.id === updatedBoqItem.id);
          console.log("existingBoqItemIndex: " + existingBoqItemIndex);
  
          if (existingBoqItemIndex !== -1) {
            // If boqItem is in the list, update it
            parentLot!.boq_items![existingBoqItemIndex] = updatedBoqItem;
            parentTrade.lots![existingLotIndex] = parentLot!;
        } else {
            // If boqItem is not in the list, add it
            parentLot!.boq_items = parentLot!.boq_items || [];
            parentLot!.boq_items.push(updatedBoqItem);
          }
        }
      }
    }

  }

  removeFromTrades(removedTradeId: string | null, removedLotId: string | null, removedBoqItemId: string | null): void {
    if (removedTradeId) {
      // Remove trade by ID
      this.trades = this.trades.filter(trade => trade.id !== removedTradeId);
    }
  
    if (removedLotId) {
      // Remove lot by ID
      this.trades.forEach(trade => {
        trade.lots = (trade.lots || []).filter(lot => lot.id !== removedLotId);
      });
    }
  
    if (removedBoqItemId) {
      // Remove boqItem by ID
      this.trades.forEach(trade => {
        (trade.lots || []).forEach(lot => {
          lot.boq_items = (lot.boq_items || []).filter(boqItem => boqItem.id !== removedBoqItemId);
        });
      });
    }
  }
  
}
