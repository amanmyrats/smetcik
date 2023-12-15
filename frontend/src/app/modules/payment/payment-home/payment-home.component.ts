import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-home',
  templateUrl: './payment-home.component.html',
  styleUrls: ['./payment-home.component.scss']
})
export class PaymentHomeComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
      this.router.navigate(['payment', 'dashboard']);
  }
}
