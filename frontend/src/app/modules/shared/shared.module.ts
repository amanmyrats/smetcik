import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TreeModule } from 'primeng/tree';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button';

import { ImportComponent } from './components/import/import.component';


@NgModule({
  declarations: [
    ImportComponent
  ],
  imports: [
    CommonModule, 
     
    FormsModule, 
    ReactiveFormsModule, 

    CardModule, 
    ButtonModule,
    AccordionModule, 
    TableModule,
    TagModule, 
    TreeModule, 
    DialogModule, 
    InputTextModule, 
    DropdownModule, 
    InputNumberModule,
    ToastModule, 
    CheckboxModule, 
    ToolbarModule, 
    FileUploadModule, 
  ], 
  exports: [
    ImportComponent, 

    CommonModule, 
     
    FormsModule, 
    ReactiveFormsModule, 

    CardModule, 
    ButtonModule,
    AccordionModule, 
    TableModule,
    TagModule, 
    TreeModule, 
    DialogModule, 
    InputTextModule, 
    DropdownModule, 
    InputNumberModule,
    ToastModule, 
    CheckboxModule, 
    ToolbarModule, 
    FileUploadModule, 
    
  ]
})
export class SharedModule { }
