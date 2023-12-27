import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseBoqItem } from '../../models/base-boq-item.model';
import { BaseBoqItemService } from '../../services/base-boq-item.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-base-boq-item-list',
  templateUrl: './base-boq-item-list.component.html',
  styleUrls: ['./base-boq-item-list.component.scss']
})
export class BaseBoqItemListComponent implements OnInit {

  baseBoqItems: BaseBoqItem[];
  baseBoqItemToEdit: BaseBoqItem | null = null;
  showBaseBoqItemForm: boolean = false;
  showConsumptionList: boolean = false;
  currentBaseBoqItem: BaseBoqItem;
  showBaseBoqItemImportForm: boolean = false;

  totalRecords: number;
  rootPathSegment: string = '/admin/boqitems/';

  constructor(
    private baseBoqItemService: BaseBoqItemService, 
  ){}

  ngOnInit(): void {
    this.getBaseBoqItems();
  }

  getBaseBoqItems(queryParams?: string): void {
    this.baseBoqItemService.getBaseBoqItems(queryParams).subscribe({
      next: (paginatedBaseBoqItems: Paginated<BaseBoqItem>) => {
        this.baseBoqItems = paginatedBaseBoqItems.results!;
        this.totalRecords = paginatedBaseBoqItems.count! as unknown as number;
        console.log("Successfully fetched BaseBoqItems.");
        console.log(paginatedBaseBoqItems.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching BaseBoqItems");
        console.log(err);
      }
    });
  }

  deleteBaseBoqItem(id: string): void {
    this.baseBoqItemService.deleteBaseBoqItem(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted BaseBoqItem.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting BaseBoqItem");
        console.log(err);
      }
    });
  }
  
  openCreateBaseBoqItemForm(): void {
    this.baseBoqItemToEdit = null;
    this.showBaseBoqItemForm = true;
  }

  openUpdateBaseBoqItemForm(baseBoqItemToEdit: BaseBoqItem): void {
    this.baseBoqItemToEdit = baseBoqItemToEdit;
    this.showBaseBoqItemForm = true;
  }
  
  handleBaseBoqItemFormCloseEvent(baseBoqItem: BaseBoqItem | null): void {
    console.log("received:");
    console.log(baseBoqItem);
    // this.updateTrades(null, null, baseBoqItem);
    this.getBaseBoqItems();
    this.showBaseBoqItemForm = false;
  }

  openConsumptionList(baseBoqItem: BaseBoqItem): void {
    this.showConsumptionList = true;
    this.currentBaseBoqItem = baseBoqItem;
  }
  
  exportExcel(): void {
    this.baseBoqItemService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported BaseBoqItems.");
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
        console.log("Error happened when exporting BaseBoqItems");
        console.log(err);
      }
    });
  }

  openBaseBoqItemImportForm(): void {
    this.showBaseBoqItemImportForm = true;
  }

  handleBaseBoqItemImportFormCloseEvent(): void {
    this.getBaseBoqItems();
    this.showBaseBoqItemImportForm = false;
  }


}
