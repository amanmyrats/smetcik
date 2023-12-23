import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompanyCurrencyListComponent } from './base-company-currency-list.component';

describe('BaseCompanyCurrencyListComponent', () => {
  let component: BaseCompanyCurrencyListComponent;
  let fixture: ComponentFixture<BaseCompanyCurrencyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCompanyCurrencyListComponent]
    });
    fixture = TestBed.createComponent(BaseCompanyCurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
