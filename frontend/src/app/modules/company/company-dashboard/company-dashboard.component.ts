import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent {

  constructor(
    private router: Router
  ){

  }

  navigateToProjects(): void {
    this.router.navigate(['company', 'projects']);
  }
  
  navigateToCompanyUnits(): void {
    this.router.navigate(['company', 'units']);
  }

  navigateToCompanyTrades(): void {
    this.router.navigate(['company', 'trades']);
  }

  navigateToCompanyLots(): void {
    this.router.navigate(['company', 'lots']);
  }

  navigateToCompanyCountries(): void {
    this.router.navigate(['company', 'countries']);
  }

  navigateToCompanyCurrencies(): void {
    this.router.navigate(['company', 'currencies']);
  }

  navigateToCompanyBoqItems(): void {
    this.router.navigate(['company', 'boqitems']);
  }

  navigateToCompanyResources(): void {
    this.router.navigate(['company', 'resources']);
  }

}
