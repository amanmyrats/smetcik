import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Lot } from 'src/app/modules/common/models/lot.model';
import { Trade } from 'src/app/modules/common/models/trade.model';
import { LotService } from 'src/app/modules/common/services/lot.service';

@Component({
  selector: 'app-lot-form',
  templateUrl: './lot-form.component.html',
  styleUrls: ['./lot-form.component.scss']
})
export class LotFormComponent implements OnInit {

  @Input() lotFromParent: Lot | null = null;
  @Input() tradeIdFromParent: string | null = null;
  @Input() trades: Trade[];
  @Output() closeDialogEventEmitter = new EventEmitter<Lot>();

  lotForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private lotService: LotService, 
  ){
    this.lotForm = this.fb.group({
      id: '',
      trade: '',
      name_tm: ''
    });
  }

  ngOnInit(): void {
      if (this.lotFromParent) {
        this.lotForm.patchValue(this.lotFromParent);
      } else {
        this.lotForm.controls['trade'].setValue(this.tradeIdFromParent);
      }
  }

  onSubmit(): void {
    if (this.lotForm.valid){
      if (this.lotFromParent){
        this.updateLot(this.lotFromParent.id!, this.lotForm.value);
      } else {
        this.createLot(this.lotForm.value);
      }
    } else {
      console.log("Form is not valid");
    }
  }

  closeDialog(lot: Lot | null): void {
    if (lot !== null){
      this.closeDialogEventEmitter.emit(lot);
    } else {
      this.closeDialogEventEmitter.emit();
    }
  }

  createLot(lot: Lot): void {
    this.lotService.createLot(lot).subscribe({
      next: (lot: Lot) => {
        console.log("New Lot was created successfully.")
        console.log(lot);
        this.closeDialog(lot);
      }, 
      error: (err: any) => {
        console.log("Failed to create new Lot.");
        console.log(err);
      }
    });
  }

  updateLot(id: string, lot: Lot): void {
    this.lotService.updateLot(id, lot).subscribe({
      next: (lot: Lot) => {
        console.log("Lot was updated successfully.");
        console.log(lot);
        this.closeDialog(lot);
      }, 
      error: (err: any) => {
        console.log("Failed to update Lot.");
        console.log(err);
      }
    });
  }

}
