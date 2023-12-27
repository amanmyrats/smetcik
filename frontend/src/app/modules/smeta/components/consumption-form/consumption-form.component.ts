import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { ConsumptionService } from '../../services/consumption.service';
import { UnitService } from 'src/app/modules/common/services/unit.service';
import { ResourceService } from '../../services/resource.service';
import { Unit } from 'src/app/modules/common/models/unit.model';
import { Resource } from '../../models/resource.model';
import { Consumption } from '../../models/consumption.model';
import { Paginated } from 'src/app/models/paginated.model';

@Component({
  selector: 'app-consumption-form',
  templateUrl: './consumption-form.component.html',
  styleUrls: ['./consumption-form.component.scss']
})
export class ConsumptionFormComponent implements OnInit {

  @Input() boqItemIdFromParent: string | null = null;
  @Input() consumptionToUpdate: Consumption | null = null;

  @Output() closeDialogEventEmitter = new EventEmitter<Consumption>();

  consumptionForm: FormGroup;
  consumptions: Consumption[];
  resources: Resource[];
  showResourceForm: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private commonService: CommonService, 
    private consumptionService: ConsumptionService, 
    private resourceService: ResourceService, 
  ){
    this.consumptionForm = this.fb.group({
      id: '',
      boq_item: '',
      resource: '',
      quantity: null,
    });
  }

  ngOnInit(): void {
    if (this.consumptionToUpdate){
      this.consumptionForm.patchValue(this.consumptionToUpdate);
    } else {
      this.consumptionForm.controls['boq_item'].setValue(this.boqItemIdFromParent);
    }
      this.getResources();
  }

  onSubmit(): void {
    if (this.consumptionForm.valid){
      console.log("Sending Consumption Form:");
      console.log(this.consumptionForm.value);
      if (this.consumptionToUpdate) {
        this.updateConsumption(this.consumptionToUpdate.id!, this.consumptionForm.value);
      } else {
        this.createConsumption(this.consumptionForm.value);
      }
    } else {
      console.log("ConsumptionForm is not valid");
    }
  }

  createConsumption(consumption: Consumption): void {
    this.consumptionService.createConsumption(consumption).subscribe({
      next: (consumption: Consumption) => {
        console.log("Successfully created Consumption.");
        console.log(consumption);
        this.closeDialog(consumption);
      }, 
      error: (err: any) => {
        console.log("Failed to create Consumption.");
        console.log(err);
      }
    });
  }

  updateConsumption(id: string, consumption: Consumption): void {
    this.consumptionService.updateConsumption(id, consumption).subscribe({
      next: (consumption: Consumption) => {
        console.log("Succussfully updated Consumption.");
        console.log(consumption);
        this.closeDialog(consumption);
      }, 
      error: (err: any) => {
        console.log("Failed to update Consumption.");
        console.log(err);
      }
    });
  }

  closeDialog(consumption: Consumption | null): void {
    if (consumption){
      this.closeDialogEventEmitter.emit(consumption);
    } else {
      this.closeDialogEventEmitter.emit();
    }
  }

  getResources(): void {
    this.resourceService.getResources().subscribe({
      next: (paginatedResources: Paginated<Resource>) => {
        console.log("Successfully fetched Resources.");
        console.log(paginatedResources);
        this.resources = paginatedResources.results!;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Resources.");
        console.log(err);
      }
    });
  }

  openResourceForm(): void {
    this.showResourceForm = true;
  }

  handleResourceFormCloseEvent(resource: Resource): void {
    this.getResources();
    this.showResourceForm = false;
  }

}
