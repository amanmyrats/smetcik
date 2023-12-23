import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCurrencyListComponent } from './base-currency-list.component';

describe('BaseCurrencyListComponent', () => {
  let component: BaseCurrencyListComponent;
  let fixture: ComponentFixture<BaseCurrencyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCurrencyListComponent]
    });
    fixture = TestBed.createComponent(BaseCurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
