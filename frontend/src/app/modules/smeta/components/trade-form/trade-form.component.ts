import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Trade } from 'src/app/modules/common/models/trade.model';
import { TradeService } from 'src/app/modules/common/services/trade.service';

@Component({
  selector: 'app-trade-form',
  templateUrl: './trade-form.component.html',
  styleUrls: ['./trade-form.component.scss']
})
export class TradeFormComponent implements OnInit {

  @Input() tradeFromParent: Trade | null = null;
  @Output() closeDialogEventEmitter = new EventEmitter<Trade | null>();

  tradeForm: FormGroup;

  constructor(
    private tradeService: TradeService, 
    private fb: FormBuilder, 
  ){
    this.tradeForm = this.fb.group({
      id: '',
      name_tm: ''
    });
  }

  ngOnInit(): void {
    console.log("tradeFromParent: ");
    console.log(this.tradeFromParent);
    if (this.tradeFromParent) {
      this.tradeForm.patchValue(this.tradeFromParent);
    }
  }

  onSubmit(): void {
    if (this.tradeForm.valid) {
      if (this.tradeFromParent){
        this.updateTrade(this.tradeFromParent.id!, this.tradeForm.value);
      } else {
        this.createTrade(this.tradeForm.value); 
      }
    } else {
      console.log("Form is Valid");
    }
  }

  createTrade(trade: Trade): void {
    console.log("Creating: ");
    console.log(trade);
    this.tradeService.createTrade(trade).subscribe({
      next:(trade: Trade) => {
        console.log("Created Trade successfully");
        console.log(trade);
        this.closeDialog(trade);
      }, 
      error: (err: any) => {
        console.log("Error happened when creating Trade.");
        console.log(err);
      }
    });
  }

  updateTrade(id: string, trade: Trade): void {
    console.log("Updating: ");
    console.log(trade);
    this.tradeService.updateTrade(id, trade).subscribe({
      next:(trade: Trade) => {
        console.log("Updated Trade successfully");
        console.log(trade);
        this.closeDialog(trade);
      }, 
      error: (err: any) => {
        console.log("Error happened when updating Trade.");
        console.log(err);
      }
    });
  }

  closeDialog(trade: Trade | null): void {
    console.log("closing, emitting...");
    if (trade !== null) {
      this.closeDialogEventEmitter.emit(trade);
    } else {
      this.closeDialogEventEmitter.emit(null);
    }
  }

}
