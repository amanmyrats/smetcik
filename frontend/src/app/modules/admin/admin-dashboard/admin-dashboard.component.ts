import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  constructor(
    private router: Router
  ) {

  }

  navigateToCompanies(): void {
    this.router.navigate(['admin', 'companies']);
  }

  navigateToBaseUnits(): void {
    this.router.navigate(['admin', 'units']);
  }

  navigateToBaseTrades(): void {
    this.router.navigate(['admin', 'trades']);
  }

  navigateToBaseLots(): void {
    this.router.navigate(['admin', 'lots']);
  }

  navigateToBaseCountries(): void {
    this.router.navigate(['admin', 'countries']);
  }

  navigateToBaseCurrencies(): void {
    this.router.navigate(['admin', 'currencies']);
  }

  navigateToBaseBoqItems(): void {
    this.router.navigate(['admin', 'boqitems']);
  }

  navigateToBaseResources(): void {
    this.router.navigate(['admin', 'resources']);
  }

}
