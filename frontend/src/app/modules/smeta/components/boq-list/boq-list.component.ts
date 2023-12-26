import { Component, OnInit } from '@angular/core';
import { Boq } from '../../models/boq.model';
import { BoqService } from '../../services/boq.service';
import { Router } from '@angular/router';
import { Paginated } from 'src/app/models/paginated.model';


@Component({
  selector: 'app-boq-list',
  templateUrl: './boq-list.component.html',
  styleUrls: ['./boq-list.component.scss']
})
export class BoqListComponent implements OnInit {
  boqs: Boq[];

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
      next: (paginatedBoqs: Paginated<Boq>) => {
        this.boqs = paginatedBoqs.results!;
        console.log("Successfully fetched boqs:")
        console.log(paginatedBoqs);
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

  gotoBoqCreate(): void {
    this.router.navigate([`smeta/boqs/create`])

  }
}
