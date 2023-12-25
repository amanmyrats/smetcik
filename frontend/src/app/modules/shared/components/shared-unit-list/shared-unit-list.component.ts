import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseUnit } from 'src/app/modules/admin/models/base-unit.model';
import { Unit } from 'src/app/modules/common/models/unit.model';
import { BaseCompanyUnit } from 'src/app/modules/company/models/base-company-unit.model';

@Component({
  selector: 'app-shared-unit-list',
  templateUrl: './shared-unit-list.component.html',
  styleUrls: ['./shared-unit-list.component.scss']
})
export class SharedUnitListComponent implements OnInit {

  @Input() units: BaseUnit[] | BaseCompanyUnit[] | Unit[];
  
  @Output() getUnitsEventEmitter = new EventEmitter<any>();
  @Output() deleteUnitEventEmitter = new EventEmitter<string>();
  @Output() openCreateUnitFormEventEmitter = new EventEmitter<any>();
  @Output() openUpdateUnitFormEventEmitter = 
            new EventEmitter<BaseUnit | BaseCompanyUnit | Unit>();
  @Output() handleUnitFormCloseEventEventEmitter = 
            new EventEmitter<BaseUnit | BaseCompanyUnit | Unit>();
  @Output() openConsumptionListEventEmitter = new EventEmitter<any>();
  @Output() exportExcelEventEmitter = new EventEmitter<any>();
  @Output() openUnitImportFormEventEmitter = new EventEmitter<any>();
  @Output() handleUnitImportFormCloseEventEventEmitter = new EventEmitter<any>();
  
  unitToEdit: BaseUnit | BaseCompanyUnit | Unit | null = null;

  constructor(
  ){}

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits(queryParams?: string): void {
    this.getUnitsEventEmitter.emit();
  }

  deleteUnit(id: string): void {
    this.deleteUnitEventEmitter.emit();
  }
  
  openCreateUnitForm(): void {
    this.openCreateUnitFormEventEmitter.emit();
  }

  openUpdateUnitForm(unitToEdit: Unit): void {
    this.openUpdateUnitFormEventEmitter.emit();
  }
  
  handleUnitFormCloseEvent(unit: Unit | null): void {
    this.handleUnitFormCloseEventEventEmitter.emit();
  }

  openConsumptionList(unit: Unit): void {
    this.openConsumptionListEventEmitter.emit();
  }
  
  exportExcel(): void {
    this.exportExcelEventEmitter.emit();
  }

  openUnitImportForm(): void {
    this.openUnitImportFormEventEmitter.emit();
  }

  handleUnitImportFormCloseEvent(): void {
    this.handleUnitImportFormCloseEventEventEmitter.emit();
  }

}
