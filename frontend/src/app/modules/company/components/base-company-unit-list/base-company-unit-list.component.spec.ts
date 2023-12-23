import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompanyUnitListComponent } from './base-company-unit-list.component';

describe('BaseCompanyUnitListComponent', () => {
  let component: BaseCompanyUnitListComponent;
  let fixture: ComponentFixture<BaseCompanyUnitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCompanyUnitListComponent]
    });
    fixture = TestBed.createComponent(BaseCompanyUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
