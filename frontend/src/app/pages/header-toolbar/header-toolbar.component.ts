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

  navigateToTender(): void {
    this.router.navigate(['tender']);
  }

  navigateToBoq(): void {
    this.router.navigate(['smeta']);
  }

  navigateToPayment(): void {
    this.router.navigate(['payment']);
  }

}
