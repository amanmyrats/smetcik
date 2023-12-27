import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { Unit } from 'src/app/modules/common/models/unit.model';
import { UnitService } from 'src/app/modules/common/services/unit.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {

  units: Unit[];
  unitToEdit: Unit | null = null;
  showUnitForm: boolean = false;
  showUnitImportForm: boolean = false;

  constructor(
    private unitService: UnitService, 
  ){}

  ngOnInit(): void {
    this.getUnits('?');
  }

  getUnits(queryParams?: string): void {
    this.unitService.getUnits(queryParams).subscribe({
      next: (paginatedUnits: Paginated<Unit>) => {
        this.units = paginatedUnits.results!;
        console.log("Successfully fetched Units.");
        console.log(paginatedUnits.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Units");
        console.log(err);
      }
    });
  }

  deleteUnit(id: string): void {
    this.unitService.deleteUnit(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted Unit.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting Unit");
        console.log(err);
      }
    });
  }
  
  openCreateUnitForm(): void {
    this.unitToEdit = null;
    this.showUnitForm = true;
  }

  openUpdateUnitForm(unitToEdit: Unit): void {
    this.unitToEdit = unitToEdit;
    this.showUnitForm = true;
  }
  
  handleUnitFormCloseEvent(unit: Unit | null): void {
    console.log("received:");
    console.log(unit);
    // this.updateTrades(null, null, unit);
    this.getUnits();
    this.showUnitForm = false;
  }
  
  exportExcel(): void {
    this.unitService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported Units.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'units.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting Units");
        console.log(err);
      }
    });
  }

  openUnitImportForm(): void {
    this.showUnitImportForm = true;
  }

  handleUnitImportFormCloseEvent(): void {
    this.getUnits();
    this.showUnitImportForm = false;
  }

}