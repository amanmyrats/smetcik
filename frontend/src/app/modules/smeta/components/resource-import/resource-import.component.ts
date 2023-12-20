import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-resource-import',
  templateUrl: './resource-import.component.html',
  styleUrls: ['./resource-import.component.scss']
})
export class ResourceImportComponent implements OnInit{

  @ViewChild('fileUpload', {static: false}) fileUpload: FileUpload;

  constructor(
    private resourceService: ResourceService, 
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
    this.resourceService.importFromExcel(formData).subscribe({
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
