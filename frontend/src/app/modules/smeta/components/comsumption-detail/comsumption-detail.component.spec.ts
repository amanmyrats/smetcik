import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsumptionDetailComponent } from './comsumption-detail.component';

describe('ComsumptionDetailComponent', () => {
  let component: ComsumptionDetailComponent;
  let fixture: ComponentFixture<ComsumptionDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComsumptionDetailComponent]
    });
    fixture = TestBed.createComponent(ComsumptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
