import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompanyConsumptionListComponent } from './base-company-consumption-list.component';

describe('BaseCompanyConsumptionListComponent', () => {
  let component: BaseCompanyConsumptionListComponent;
  let fixture: ComponentFixture<BaseCompanyConsumptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCompanyConsumptionListComponent]
    });
    fixture = TestBed.createComponent(BaseCompanyConsumptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
