import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDashboardComponent } from './payment-dashboard.component';

describe('PaymentDashboardComponent', () => {
  let component: PaymentDashboardComponent;
  let fixture: ComponentFixture<PaymentDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentDashboardComponent]
    });
    fixture = TestBed.createComponent(PaymentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
