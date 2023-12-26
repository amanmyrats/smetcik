import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseUnit } from '../../models/base-unit.model';
import { BaseUnitService } from '../../services/base-unit.service';

@Component({
  selector: 'app-base-unit-list',
  templateUrl: './base-unit-list.component.html',
  styleUrls: ['./base-unit-list.component.scss']
})
export class BaseUnitListComponent implements OnInit {

  baseUnits: BaseUnit[];
  baseUnitToEdit: BaseUnit | null = null;
  showBaseUnitForm: boolean = false;
  showBaseUnitImportForm: boolean = false;

  constructor(
    private baseUnitService: BaseUnitService, 
  ){}

  ngOnInit(): void {
    this.getBaseUnits();
  }

  getBaseUnits(queryParams?: string): void {
    this.baseUnitService.getBaseUnits(queryParams).subscribe({
      next: (paginatedBaseUnits: Paginated<BaseUnit>) => {
        this.baseUnits = paginatedBaseUnits.results!;
        console.log("Successfully fetched BaseUnits.");
        console.log(paginatedBaseUnits.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseUnits");
        console.log(err);
      }
    });
  }

  deleteBaseUnit(id: string): void {
    this.baseUnitService.deleteBaseUnit(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseUnit.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseUnit");
        console.log(err);
      }
    });
  }
  
  openCreateBaseUnitForm(): void {
    this.baseUnitToEdit = null;
    this.showBaseUnitForm = true;
  }

  openUpdateBaseUnitForm(baseUnitToEdit: BaseUnit): void {
    this.baseUnitToEdit = baseUnitToEdit;
    this.showBaseUnitForm = true;
  }
  
  handleBaseUnitFormCloseEvent(baseBoqItem: BaseUnit | null): void {
    console.log("received:");
    console.log(baseBoqItem);
    // this.updateTrades(null, null, baseBoqItem);
    this.getBaseUnits();
    this.showBaseUnitForm = false;
  }
  
  exportExcel(): void {
    this.baseUnitService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseUnits.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_units.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting BaseUnits");
        console.log(err);
      }
    });
  }

  openBaseUnitImportForm(): void {
    this.showBaseUnitImportForm = true;
  }

  handleBaseUnitImportFormCloseEvent(): void {
    this.getBaseUnits();
    this.showBaseUnitImportForm = false;
  }

}