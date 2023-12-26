import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/modules/company/models/project.model';

@Component({
  selector: 'app-shared-project-list',
  templateUrl: './shared-project-list.component.html',
  styleUrls: ['./shared-project-list.component.scss']
})
export class SharedProjectListComponent implements OnInit {

  @Input() projects: Project[];
  
  @Output() getProjectsEventEmitter = new EventEmitter<any>();
  @Output() deleteProjectEventEmitter = new EventEmitter<string>();
  @Output() openCreateProjectFormEventEmitter = new EventEmitter<any>();
  @Output() openUpdateProjectFormEventEmitter = new EventEmitter<Project>();
  @Output() handleProjectFormCloseEventEventEmitter = new EventEmitter<Project>();
  @Output() openConsumptionListEventEmitter = new EventEmitter<any>();
  @Output() exportExcelEventEmitter = new EventEmitter<any>();
  @Output() openProjectImportFormEventEmitter = new EventEmitter<any>();
  @Output() handleProjectImportFormCloseEventEventEmitter = new EventEmitter<any>();
  
  projectToEdit: Project | null = null;

  constructor(
  ){}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(queryParams?: string): void {
    this.getProjectsEventEmitter.emit();
  }

  deleteProject(id: string): void {
    this.deleteProjectEventEmitter.emit();
  }
  
  openCreateProjectForm(): void {
    this.openCreateProjectFormEventEmitter.emit();
  }

  openUpdateProjectForm(projectToEdit: Project): void {
    this.openUpdateProjectFormEventEmitter.emit();
  }
  
  handleProjectFormCloseEvent(project: Project | null): void {
    this.handleProjectFormCloseEventEventEmitter.emit();
  }

  openConsumptionList(project: Project): void {
    this.openConsumptionListEventEmitter.emit();
  }
  
  exportExcel(): void {
    this.exportExcelEventEmitter.emit();
  }

  openProjectImportForm(): void {
    this.openProjectImportFormEventEmitter.emit();
  }

  handleProjectImportFormCloseEvent(): void {
    this.handleProjectImportFormCloseEventEventEmitter.emit();
  }

}