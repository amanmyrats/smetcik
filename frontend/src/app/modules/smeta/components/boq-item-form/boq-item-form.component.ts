import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Boq } from '../../models/boq.model';
import { Lot } from 'src/app/modules/common/models/lot.model';
import { Unit } from 'src/app/modules/common/models/unit.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnitService } from 'src/app/modules/common/services/unit.service';
import { BoqItem } from '../../models/boq-item.model';
import { BoqItemService } from '../../services/boq-item.service';
import { LotService } from 'src/app/modules/common/services/lot.service';

@Component({
  selector: 'app-boq-item-form',
  templateUrl: './boq-item-form.component.html',
  styleUrls: ['./boq-item-form.component.scss']
})
export class BoqItemFormComponent implements OnInit {

  @Input() boqItemFromParent: Boq | null = null;
  @Input() boqIdFromParent: string | null = null;
  
  @Output() closeDialogEventEmitter = new EventEmitter<BoqItem>();
  
  units: Unit[];
  boqItemForm: FormGroup;
  lots: Lot[];

  constructor(
    private fb: FormBuilder, 
    private unitService: UnitService, 
    private boqItemService: BoqItemService, 
    private lotService: LotService, 
  ){
    this.getUnits();
    this.getLots();
    this.boqItemForm = this.fb.group({
      id: '',
      boq: '',
      lot: '',
      name_tm: '',
      quantity: null,
      unit: '',
      material_unit_price: null,
      labor_unit_price: null, 
    });
  }

  ngOnInit(): void {
      if (this.boqItemFromParent) {
        this.boqItemForm.patchValue(this.boqItemFromParent)
      } else {
        this.boqItemForm.controls['boq'].setValue(this.boqIdFromParent);
      }
  }

  onSubmit(): void {
    if (this.boqItemForm.value){
      console.log("Sending...");
      console.log(this.boqItemForm.value);
      if (this.boqItemFromParent){
        this.updateBoqItem(this.boqItemFromParent.id!, this.boqItemForm.value);
      } else {
        this.createBoqItem(this.boqItemForm.value);
      }
    } else {
      console.log("BoqItemForm is not valid.");
    }
  }

  createBoqItem(boqItem: BoqItem){
    this.boqItemService.createBoqItem(boqItem).subscribe({
      next: (boqItem: BoqItem) => {
        console.log("BoqItem was created successfully.");
        console.log(boqItem);
        this.closeDialog(boqItem);
      }, 
      error: (err: any) => {
        console.log("Error happened when creating BoqItem.");
        console.log(err);
      }
    });
  }

  updateBoqItem(id: string, boqItem: BoqItem): void {
    this.boqItemService.updateBoqItem(id, boqItem).subscribe({
      next: (boqItem: BoqItem) => {
        console.log("BoqItem updated successfully");
        console.log(boqItem);
        this.closeDialog(boqItem);
      },       
      error: (err: any) => {
        console.log("Error when updating BoqItem");
        console.log(err);
      }
    }
    );
  }

  closeDialog(boqItem: BoqItem | null): void {
    console.log("Closing dialog");
    if (boqItem) {
      this.closeDialogEventEmitter.emit(boqItem);
    } else {
      this.closeDialogEventEmitter.emit();
    }
  }

  getUnits(): void {
    this.unitService.getUnits().subscribe({
      next: (units: Unit[]) => {
        console.log("Units fetched successfully.");
        console.log(units);
        this.units = units;
      }, 
      error: (err: any) => {
        console.log("Error when fetching Units.");
        console.log(err);
      }
    });
  }

  getLots(): void {
    this.lotService.getLots().subscribe({
      next: (lots: Lot[]) => {
        console.log("Successfully fetched Lots.");
        console.log(lots);
        this.lots = lots;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Lots.");
        console.log(err);
      }
    });
  }

}
