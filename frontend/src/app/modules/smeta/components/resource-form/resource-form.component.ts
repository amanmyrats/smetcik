import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { UnitService } from 'src/app/modules/common/services/unit.service';
import { Unit } from 'src/app/modules/common/models/unit.model';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss']
})
export class ResourceFormComponent implements OnInit {

  @Output() closeDialogEventEmitter = new EventEmitter<Resource>();
  @Input() resourceFromParent: Resource | null = null;
  resourceForm: FormGroup;
  units: Unit[];

  constructor(
    private fb: FormBuilder, 
    private unitService: UnitService, 
    private resourceService: ResourceService, 
  ){
    this.resourceForm = this.fb.group({
      id: '',
      name_tm: '', 
      unit: '',
      unit_price: null,
      is_material: true,
    });
  }

  ngOnInit(): void {
    if (this.resourceFromParent) {
      this.resourceForm.patchValue(this.resourceFromParent)
    }
    this.getUnits();
  }

  onSubmit(): void {
    if (this.resourceForm.valid){
      if (this.resourceFromParent){
        this.updateResource(this.resourceFromParent.id!, this.resourceForm.value);
      } else {
        this.createResource(this.resourceForm.value);
      }
    } else {
      console.log("Form is not valid");
    }
  }

  closeDialog(resource: Resource | null): void {
    if (resource !== null){
      this.closeDialogEventEmitter.emit(resource);
    } else {
      this.closeDialogEventEmitter.emit();
    }
  }

  createResource(resource: Resource): void {
    this.resourceService.createResource(resource).subscribe({
      next: (resource: Resource) => {
        console.log("New Resource was created successfully.")
        console.log(resource);
        this.closeDialog(resource);
      }, 
      error: (err: any) => {
        console.log("Failed to create new Resource.");
        console.log(err);
      }
    });
  }

  updateResource(id: string, resource: Resource): void {
    this.resourceService.updateResource(id, resource).subscribe({
      next: (resource: Resource) => {
        console.log("Resource was updated successfully.");
        console.log(resource);
        this.closeDialog(resource);
      }, 
      error: (err: any) => {
        console.log("Failed to update Resource.");
        console.log(err);
      }
    });
  }

  getUnits(): void {
    console.log("currentUnits:")
    console.log(this.unitService.getCurrentUnits());
    if (this.unitService.getCurrentUnits()) {
      console.log("No need to fetch from server again.")
      this.units = this.unitService.getCurrentUnits();
    } else {
      this.unitService.getUnits().subscribe({
        next: (units: Unit[]) => {
          console.log("Units fetched from server successfully.");
          console.log(units);
          this.units = units;
          this.unitService.setCurrentUnits(units);
        }, 
        error: (err: any) => {
          console.log("Failed to fetch Units from server.");
          console.log(err);
        }
      });
    }
  }

}
