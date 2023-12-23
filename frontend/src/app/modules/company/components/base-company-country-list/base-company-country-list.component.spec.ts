import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompanyCountryListComponent } from './base-company-country-list.component';

describe('BaseCompanyCountryListComponent', () => {
  let component: BaseCompanyCountryListComponent;
  let fixture: ComponentFixture<BaseCompanyCountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCompanyCountryListComponent]
    });
    fixture = TestBed.createComponent(BaseCompanyCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
