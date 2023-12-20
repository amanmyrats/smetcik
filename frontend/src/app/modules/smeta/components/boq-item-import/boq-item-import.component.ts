import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { BoqItemService } from '../../services/boq-item.service';

@Component({
  selector: 'app-boq-item-import',
  templateUrl: './boq-item-import.component.html',
  styleUrls: ['./boq-item-import.component.scss']
})
export class BoqItemImportComponent implements OnInit{

  @ViewChild('fileUpload', {static: false}) fileUpload: FileUpload;

  constructor(
    private boqItemService: BoqItemService, 
  ){

  }

  fileSelected: File | null = null;

  ngOnInit(): void {
    
  }

  onUserSelect(event: any): void {
    this.fileSelected = event.files && event.files.length > 0 ? event.files[0] : null;
  }

  onClearSelectionClick(): void {
    this.fileSelected = null;
    this.fileUpload.clear();
  }

  onImport(): void {
    if (this.fileSelected != null) {

      var formData: FormData = new FormData();
      formData.append('excel', this.fileSelected);
      
      this.importFromExcel(formData);
    } else {
      console.log("Excel file is not selected.");
    }
  }

  importFromExcel(formData: FormData): void {
    this.boqItemService.importFromExcel(formData).subscribe({
      next: (data: any) => {
        console.log("Imported successfully");
        console.log(data);
        this.onClearSelectionClick();
      }, 
      error: (err: any) => {
        console.log("Failed to import");
        console.log(err);
      }
    });
  }

}
