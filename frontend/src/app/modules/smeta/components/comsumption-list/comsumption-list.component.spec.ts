import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsumptionListComponent } from './comsumption-list.component';

describe('ComsumptionListComponent', () => {
  let component: ComsumptionListComponent;
  let fixture: ComponentFixture<ComsumptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComsumptionListComponent]
    });
    fixture = TestBed.createComponent(ComsumptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
