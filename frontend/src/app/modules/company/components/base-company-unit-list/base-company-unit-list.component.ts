import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyUnit } from '../../models/base-company-unit.model';
import { BaseCompanyUnitService } from '../../services/base-company-unit.service';

@Component({
  selector: 'app-base-company-unit-list',
  templateUrl: './base-company-unit-list.component.html',
  styleUrls: ['./base-company-unit-list.component.scss']
})
export class BaseCompanyUnitListComponent implements OnInit {

  baseCompanyUnits: BaseCompanyUnit[];
  baseCompanyUnitToEdit: BaseCompanyUnit | null = null;
  showBaseCompanyUnitForm: boolean = false;
  showBaseCompanyUnitImportForm: boolean = false;

  constructor(
    private baseCompanyUnitService: BaseCompanyUnitService, 
  ){}

  ngOnInit(): void {
    this.getBaseCompanyUnits();
  }

  getBaseCompanyUnits(queryParams?: string): void {
    this.baseCompanyUnitService.getBaseCompanyUnits(queryParams).subscribe({
      next: (paginatedBaseCompanyUnits: Paginated<BaseCompanyUnit>) => {
        this.baseCompanyUnits = paginatedBaseCompanyUnits.results!;
        console.log("Successfully fetched BaseCompanyUnits.");
        console.log(paginatedBaseCompanyUnits.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseCompanyUnits");
        console.log(err);
      }
    });
  }

  deleteBaseCompanyUnit(id: string): void {
    this.baseCompanyUnitService.deleteBaseCompanyUnit(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseCompanyUnit.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseCompanyUnit");
        console.log(err);
      }
    });
  }
  
  openCreateBaseCompanyUnitForm(): void {
    this.baseCompanyUnitToEdit = null;
    this.showBaseCompanyUnitForm = true;
  }

  openUpdateBaseCompanyUnitForm(baseCompanyUnitToEdit: BaseCompanyUnit): void {
    this.baseCompanyUnitToEdit = baseCompanyUnitToEdit;
    this.showBaseCompanyUnitForm = true;
  }
  
  handleBaseCompanyUnitFormCloseEvent(baseBoqItem: BaseCompanyUnit | null): void {
    console.log("received:");
    console.log(baseBoqItem);
    // this.updateTrades(null, null, baseBoqItem);
    this.getBaseCompanyUnits();
    this.showBaseCompanyUnitForm = false;
  }

  exportExcel(): void {
    this.baseCompanyUnitService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseCompanyUnits.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_company_units.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting BaseCompanyUnits");
        console.log(err);
      }
    });
  }

  openBaseCompanyUnitImportForm(): void {
    this.showBaseCompanyUnitImportForm = true;
  }

  handleBaseCompanyUnitImportFormCloseEvent(): void {
    this.getBaseCompanyUnits();
    this.showBaseCompanyUnitImportForm = false;
  }

}