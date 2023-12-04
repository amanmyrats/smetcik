import { Component } from '@angular/core';
import { Trade } from 'src/app/modules/common/models/trade.model';
import { TradeService } from 'src/app/modules/common/services/trade.service';

@Component({
  selector: 'app-boq-item-list',
  templateUrl: './boq-item-list.component.html',
  styleUrls: ['./boq-item-list.component.scss']
})
export class BoqItemListComponent {
  trades: Trade[] = [];

  constructor(
    private tradeService: TradeService, 
  ){

    this.getTrades();
  }

  getTrades(): void {
    this.tradeService.getTrades().subscribe({
      next: (trades: Trade[]) => {
        this.trades = trades;
        console.log("Trades fetched successfully");
      }, 
      error: (err: any) => {
        console.log("Error when fetching Trades");
        console.log(err);
      }
    });
  }
}
