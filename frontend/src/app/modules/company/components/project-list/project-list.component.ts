import { Component, OnInit } from '@angular/core';
import { Paginated } from 'src/app/models/paginated.model';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent  implements OnInit {

  projects: Project[];
  projectToEdit: Project | null = null;
  showProjectForm: boolean = false;
  showProjectImportForm: boolean = false;

  constructor(
    private projectService: ProjectService, 
  ){}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(queryParams?: string): void {
    this.projectService.getProjects(queryParams).subscribe({
      next: (paginatedProjects: Paginated<Project>) => {
        this.projects = paginatedProjects.results!;
        console.log("Successfully fetched Projects.");
        console.log(paginatedProjects.results!);
      }, 
      error: (err: any) => {
        console.log("Error when fetching Projects");
        console.log(err);
      }
    });
  }

  deleteProject(id: string): void {
    this.projectService.deleteProject(id).subscribe({
      next: (data: any) => {
        console.log("Successfully deleted Project.");
        console.log(data);
      }, 
      error: (err: any) => {
        console.log("Error when deleting Project");
        console.log(err);
      }
    });
  }
  
  openCreateProjectForm(): void {
    this.projectToEdit = null;
    this.showProjectForm = true;
  }

  openUpdateProjectForm(projectToEdit: Project): void {
    this.projectToEdit = projectToEdit;
    this.showProjectForm = true;
  }
  
  handleProjectFormCloseEvent(baseBoqItem: Project | null): void {
    console.log("received:");
    console.log(baseBoqItem);
    // this.updateTrades(null, null, baseBoqItem);
    this.getProjects();
    this.showProjectForm = false;
  }

  exportExcel(): void {
    this.projectService.exportToExcel().subscribe({
      next: (data: Blob) => {
        console.log("Succussfully exported Projects.");
        console.log(data);
        // Create a Blob from the response
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
      
      // Create a link element, set the download attribute, and simulate a click
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'projects.xlsx';
      link.click();
      
      // Release the URL object
      window.URL.revokeObjectURL(link.href);
      }, 
      error: (err: any) => {
        console.log("Error happened when exporting Projects");
        console.log(err);
      }
    });
  }

  openProjectImportForm(): void {
    this.showProjectImportForm = true;
  }

  handleProjectImportFormCloseEvent(): void {
    this.getProjects();
    this.showProjectImportForm = false;
  }

}