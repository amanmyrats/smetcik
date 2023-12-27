import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent {

  constructor(
    private router: Router, 
  ){}

  navigateToCompany(): void {
    this.router.navigate(['company', 'dashboard']);
  }

  navigateToTender(): void {
    this.router.navigate(['tender']);
  }

  navigateToSmeta(): void {
    this.router.navigate(['smeta', 'dashboard']);
  }

  navigateToPayment(): void {
    this.router.navigate(['payment']);
  }

  navigateToAdmin(): void {
    this.router.navigate(['admin', 'dashboard']);
  }

}
