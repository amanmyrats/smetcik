import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyBoqItem } from '../../models/base-company-boq-item.model';
import { BaseCompanyBoqItemService } from '../../services/base-company-boq-item.service';

@Component({
  selector: 'app-base-company-boq-item-list',
  templateUrl: './base-company-boq-item-list.component.html',
  styleUrls: ['./base-company-boq-item-list.component.scss']
})
export class BaseCompanyBoqItemListComponent implements OnInit {

  baseCompanyBoqItems: BaseCompanyBoqItem[];
  baseCompanyBoqItemToEdit: BaseCompanyBoqItem | null = null;
  showBaseCompanyBoqItemForm: boolean = false;
  showConsumptionList: boolean = false;
  currentBaseCompanyBoqItem: BaseCompanyBoqItem;
  showBaseCompanyBoqItemImportForm: boolean = false;

  totalRecords: number;
  rootPathSegment: string = '/company/boqitems/';

  constructor(
    private baseCompanyBoqItemService: BaseCompanyBoqItemService, 
  ){}

  ngOnInit(): void {
    // this.getBaseCompanyBoqItems();
  }

  getBaseCompanyBoqItems(queryParams?: string): void {
    this.baseCompanyBoqItemService.getBaseCompanyBoqItems(queryParams).subscribe({
      next: (paginatedBaseCompanyBoqItems: Paginated<BaseCompanyBoqItem>) => {
        this.baseCompanyBoqItems = paginatedBaseCompanyBoqItems.results!;
        this.totalRecords = paginatedBaseCompanyBoqItems.count! as unknown as number;
        console.log("Successfully fetched BaseCompanyBoqItems.");
        console.log(paginatedBaseCompanyBoqItems.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseCompanyBoqItems");
        console.log(err);
      }
    });
  }

  deleteBaseCompanyBoqItem(id: string): void {
    this.baseCompanyBoqItemService.deleteBaseCompanyBoqItem(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseCompanyBoqItem.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseCompanyBoqItem");
        console.log(err);
      }
    });
  }
  
  openCreateBaseCompanyBoqItemForm(): void {
    this.baseCompanyBoqItemToEdit = null;
    this.showBaseCompanyBoqItemForm = true;
  }

  openUpdateBaseCompanyBoqItemForm(baseCompanyBoqItemToEdit: BaseCompanyBoqItem): void {
    this.baseCompanyBoqItemToEdit = baseCompanyBoqItemToEdit;
    this.showBaseCompanyBoqItemForm = true;
  }
  
  handleBaseCompanyBoqItemFormCloseEvent(baseCompanyBoqItem: BaseCompanyBoqItem | null): void {
    console.log("received:");
    console.log(baseCompanyBoqItem);
    // this.updateTrades(null, null, baseCompanyBoqItem);
    this.getBaseCompanyBoqItems();
    this.showBaseCompanyBoqItemForm = false;
  }

  openConsumptionList(baseCompanyBoqItem: BaseCompanyBoqItem): void {
    this.showConsumptionList = true;
    this.currentBaseCompanyBoqItem = baseCompanyBoqItem;
  }
  
  exportExcel(): void {
    this.baseCompanyBoqItemService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseCompanyBoqItems.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'base_boq_items.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting BaseCompanyBoqItems");
        console.log(err);
      }
    });
  }

  openBaseCompanyBoqItemImportForm(): void {
    this.showBaseCompanyBoqItemImportForm = true;
  }

  handleBaseCompanyBoqItemImportFormCloseEvent(): void {
    this.getBaseCompanyBoqItems();
    this.showBaseCompanyBoqItemImportForm = false;
  }

}
