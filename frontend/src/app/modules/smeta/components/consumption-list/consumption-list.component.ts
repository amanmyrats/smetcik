import { Component, Input, OnInit } from '@angular/core';
import { Consumption } from '../../models/consumption.model';
import { BoqItem } from '../../models/boq-item.model';
import { CommonService } from 'src/app/services/common.service';
import { ConsumptionService } from '../../services/consumption.service';
import { UnitService } from 'src/app/modules/common/services/unit.service';

@Component({
  selector: 'app-consumption-list',
  templateUrl: './consumption-list.component.html',
  styleUrls: ['./consumption-list.component.scss']
})
export class ConsumptionListComponent implements OnInit {

  @Input() boqItemFromParent: BoqItem;

  consumptions: Consumption[];
  showConsumptionForm: boolean = false;
  consumptionToUpdate: Consumption | null;

  constructor(
    private commonService: CommonService, 
    private consumptionService: ConsumptionService, 
    private unitService: UnitService, 
  ){
  }

  ngOnInit(): void {
    this.getConsumptions(); 
  }

  openCreateConsumptionForm(): void {
    this.consumptionToUpdate = null;
    this.showConsumptionForm = true;
  }

  openUpdateConsumptionForm(consumption: Consumption): void {
    this.consumptionToUpdate = consumption;
    this.showConsumptionForm = true;

  }

  deleteConsumption(id: string): void {
    this.consumptionService.deleteConsumption(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted Consumption.");
        console.log(data);        
        this.getConsumptions(); 
  }, 
      error: (err: any) => {
        console.log("Failed to delete Consumption.");
        console.log(err);
      }
    });
  }

  handleConsumptionFormCloseEvent(consumption: Consumption): void {
    this.updateConsumptions(consumption);
    this.showConsumptionForm = false
  }

  getConsumptions(): void {
    var queryParams: string = this.commonService.buildFilter({
      boq_item: {value: this.boqItemFromParent!.id }
    });
    this.consumptionService.getConsumptions(queryParams).subscribe({
      next: (consumptions: Consumption[]) => {
        console.log("Successfully fetched Consumptions.");
        console.log(consumptions);
        this.consumptions = consumptions;
      }, 
      error: (err: any) => {
        console.log("Failed to fetch Consumptions.");
        console.log(err);
      }
    });
  }

  
  updateConsumptions(updatedConsumption: Consumption): void {
    if (updatedConsumption) {
      const existingConsumptionIndex = this.consumptions.findIndex(consumption => consumption.id === updatedConsumption.id);

      if (existingConsumptionIndex !== -1) {
        // If consumption is in the list, update it
        this.consumptions[existingConsumptionIndex] = updatedConsumption;
      } else {
        // If consumption is not in the list, add it
        this.consumptions.push(updatedConsumption);
      }
    }
  }

}
