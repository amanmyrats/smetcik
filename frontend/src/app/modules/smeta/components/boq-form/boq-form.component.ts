import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Project } from 'src/app/modules/company/models/project.model';
import { ProjectService } from 'src/app/modules/company/services/project.service';
import { BoqService } from '../../services/boq.service';
import { Boq } from '../../models/boq.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boq-form',
  templateUrl: './boq-form.component.html',
  styleUrls: ['./boq-form.component.scss']
})
export class BoqFormComponent implements OnInit {

  boqForm: FormGroup;
  projects: Project[];

  constructor(
    private fb: FormBuilder, 
    private projectService: ProjectService, 
    private boqService: BoqService, 
    private router: Router, 
  ){
    this.boqForm = this.fb.group({
      id: '',
      project: '', 
      contract_number: '',
      description: '',
      boq_version: 1,
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSubmit(): void {
    if (this.boqForm.valid){
      this.createBoq(this.boqForm.value);
    } else {
      console.log("Form is not valid");
    }
  }

  gotoBoqList(): void {
    this.router.navigate(['smeta', 'boqs']);
  }

  gotoBoqItems(id: string): void {
    this.router.navigate(['smeta', 'boqs', id, 'boqitems']);
  }

  createBoq(boq: Boq): void {
    this.boqService.createBoq(boq).subscribe({
      next: (boq: Boq) => {
        console.log("New Boq was created successfully.")
        console.log(boq);
        this.gotoBoqItems(boq.id!);
      }, 
      error: (err: any) => {
        console.log("Failed to create new Boq.");
        console.log(err);
      }
    });
  }


  getProjects(): void {
    this.projectService.getProjects().subscribe({
        next: (projects: Project[]) => {
          console.log("Projects fetched from server successfully.");
          console.log(projects);
          this.projects = projects;
        }, 
        error: (err: any) => {
          console.log("Failed to fetch Projects from server.");
          console.log(err);
        }
      });
  }

}