import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Trade } from 'src/app/modules/common/models/trade.model';
import { TradeService } from 'src/app/modules/common/services/trade.service';
import { BoqItem } from '../../models/boq-item.model';
import { BoqItemService } from '../../services/boq-item.service';
import { Lot } from 'src/app/modules/common/models/lot.model';
import { LotService } from 'src/app/modules/common/services/lot.service';
import { LazyLoadEvent } from 'primeng/api';
import { Paginated } from 'src/app/models/paginated.model';
import { FilterSearchComponent } from 'src/app/modules/shared/components/filter-search/filter-search.component';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-boq-item-list',
  templateUrl: './boq-item-list.component.html',
  styleUrls: ['./boq-item-list.component.scss']
})
export class BoqItemListComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator', { static: true }) paginator: Paginator;
  @ViewChild(FilterSearchComponent) filterSearchComponent!: FilterSearchComponent;

  boqIdFromUrl: string | null = null;
  trades: Trade[] = [];
  tradesDynamic: Trade[] = [];
  lots: Lot[];
  boqItems: BoqItem[] = [];

  first: number = 0;
  rows: number = 10;
  totalRecords: number;

  showTradeForm: boolean = false;
  showLotForm: boolean = false;
  showBoqItemForm: boolean = false;
  showConsumptionList: boolean = false;
  showBoqItemImportForm: boolean = false;

  lotToEdit: Lot | null = null;
  boqItemToEdit: BoqItem | null = null;
  tradeToEdit: Trade | null = null;

  currentTradeId: string;
  currentLotId: string;
  currentBoqItem: BoqItem;

  rootPathSegment: string = '/boqs/1/boqitems';
  calledOnPageChange: boolean = false;


  constructor(
    private tradeService: TradeService,
    private boqItemService: BoqItemService,
    private lotService: LotService,
  ) {
    // this.boqIdFromUrl = this.route.snapshot.paramMap.get('boqId');
    // this.getBoqItems();
  }

  ngOnInit(): void {
    // this.getLots();
    // this.initializeBoqItems();
  }

  ngAfterViewInit(): void {
    this.initializeBoqItems();
  }

  private initializeBoqItems(): void {
    this.getBoqItems(this.filterSearchComponent.queryParams);
    this.filterSearchComponent.updateUrl(this.rootPathSegment, this.filterSearchComponent.queryParams);
  }


  getBoqItems(queryParams?: string): void {
    this.boqItemService.getBoqItems(queryParams).subscribe({
      next: (paginatedBoqItems: Paginated<BoqItem>) => {
        console.log("Successfully fetched BoqItems.");
        console.log(paginatedBoqItems);
        this.boqItems = paginatedBoqItems.results!;
        this.filterSearchComponent.totalRecords = paginatedBoqItems.count! as unknown as number;
        this.first = this.filterSearchComponent.first;
        this.rows = this.filterSearchComponent.rows;
        this.totalRecords = this.filterSearchComponent.totalRecords;
  },
      error: (err: any) => {
        console.log("Error when fetching BoqItems.");
        console.log(err);
      }
    });
  }

  getTrades(): void {
    this.tradeService.getTrades().subscribe({
      next: (paginatedTrades: Paginated<Trade>) => {
        this.trades = paginatedTrades.results!;
        this.tradesDynamic = paginatedTrades.results!;
        console.log("Trades fetched successfully");
        console.log(paginatedTrades);
      },
      error: (err: any) => {
        console.log("Error when fetching Trades");
        console.log(err);
      }
    });
  }

  getLots(queryParams?: string): void {
    this.lotService.getLots(queryParams).subscribe({
      next: (paginatedLots: Paginated<Lot>) => {
        console.log("Successfully fetched Lots");
        console.log(paginatedLots);
        this.lots = paginatedLots.results!;
      },
      error: (err: any) => {
        console.log("Error when fetching Lots");
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

  openCreateBoqItemForm(): void {
    this.boqItemToEdit = null;
    this.showBoqItemForm = true;
  }

  openUpdateBoqItemForm(boqItemToEdit: BoqItem): void {
    this.boqItemToEdit = boqItemToEdit;
    this.showBoqItemForm = true;
  }

  deleteBoqItem(id: string): void {
    this.boqItemService.deleteBoqItem(id).subscribe({
      next: (data: any) => {
        console.log("BoqItem was deteled successfully.");
        console.log(data);
        // this.getBoqItems();
        this.initializeBoqItems();
        // this.removeFromTrades(null, null, id);
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
    // this.updateTrades(null, null, boqItem);
    // this.getBoqItems();
    this.initializeBoqItems();
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

  exportExcel(): void {
    this.boqItemService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BoqItems.");
        console.log(data);
        // Create a Blob from the response
        const blob = new Blob([data], { type: 'application/vnd.ms-excel' });

        // Create a link element, set the download attribute, and simulate a click
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'boq_items.xlsx';
        link.click();

        // Release the URL object
        window.URL.revokeObjectURL(link.href);
      },
      error: (err: any) => {
        console.log("Error happened when exporting BoqItems");
        console.log(err);
      }
    });
  }

  openBoqItemImportForm(): void {
    this.showBoqItemImportForm = true;
  }

  handleBoqItemImportFormCloseEvent(): void {
    this.getTrades();
    this.showBoqItemImportForm = false;
  }


  onPageChange(event: LazyLoadEvent | any) {
    this.calledOnPageChange = true;
    this.filterSearchComponent.lazyLoadEvent.first = event.first;
    this.filterSearchComponent.lazyLoadEvent.rows = event.rows;
    this.filterSearchComponent.lazyLoadEvent.filters = this.filterSearchComponent.filterSearchForm.value;
    if (!this.filterSearchComponent.lazyLoadEvent.sortField) {
      this.filterSearchComponent.lazyLoadEvent.sortField = 'id';
    }

    this.filterSearchComponent.queryParams = this.filterSearchComponent.commonService.buildPaginationParams(this.filterSearchComponent.lazyLoadEvent);
    this.getBoqItems(this.filterSearchComponent.queryParams);
    this.filterSearchComponent.updateUrl(this.rootPathSegment, this.filterSearchComponent.queryParams);

  }

  handleFilterChange(): void {
    this.calledOnPageChange = false;
    this.paginator.changePage(0);
    if (!this.calledOnPageChange) {
      this.onPageChange(this.filterSearchComponent.lazyLoadEvent);
    }
  }

  handleSearchSubmit(): void {
    if (this.filterSearchComponent.filterSearchForm.valid) {
      this.paginator.changePage(0);
    }
  }

  handleClearSearch(): void {
    this.initializeBoqItems();
  }

}
