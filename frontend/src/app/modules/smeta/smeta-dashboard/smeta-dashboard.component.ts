import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smeta-dashboard',
  templateUrl: './smeta-dashboard.component.html',
  styleUrls: ['./smeta-dashboard.component.scss']
})
export class SmetaDashboardComponent {

  constructor(
    private router: Router
  ){

  }

  navigateToBOQs(): void {
    this.router.navigate(['smeta', 'boqs']);
  }
  
  navigateToUnits(): void {
    this.router.navigate(['smeta', 'units']);
  }

  navigateToTrades(): void {
    this.router.navigate(['smeta', 'trades']);
  }

  navigateToLots(): void {
    this.router.navigate(['smeta', 'lots']);
  }

  navigateToCountries(): void {
    this.router.navigate(['smeta', 'countries']);
  }

  navigateToCurrencies(): void {
    this.router.navigate(['smeta', 'currencies']);
  }

  navigateToBoqItems(): void {
    this.router.navigate(['smeta', 'boqitems']);
  }

  navigateToResources(): void {
    this.router.navigate(['smeta', 'resources']);
  }

}
