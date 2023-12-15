import { Component, OnInit } from '@angular/core';
import { Boq } from '../../models/boq.model';
import { BoqService } from '../../services/boq.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boq-list',
  templateUrl: './boq-list.component.html',
  styleUrls: ['./boq-list.component.scss']
})
export class BoqListComponent implements OnInit {
  boqs: Boq[] = [];

  constructor(
    private boqService: BoqService, 
    private router: Router, 
  ){

  }

  ngOnInit(): void {
      console.log("boq list working");
      this.getBoqs();
  }

  getBoqs(): void {
    this.boqService.getBoqs().subscribe({
      next: (boqs: Boq[]) => {
        this.boqs = boqs;
        console.log("Successfully fetched boqs:")
        console.log(boqs);
      },
      error: (err: any) => {
        console.log("Error when fetching boqs:");
        console.log(err);
      }
    });
  }

  gotoBoqItems(boqId: string): void {
    this.router.navigate([`smeta/boqs/${boqId}/boqitems`])
  }

  gotoBoqMaterials(boqId: string): void {
    this.router.navigate([`smeta/boqs/${boqId}/materials`])
  }
}
