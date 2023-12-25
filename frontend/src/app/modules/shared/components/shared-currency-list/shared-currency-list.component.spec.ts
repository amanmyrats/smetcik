import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCurrencyListComponent } from './shared-currency-list.component';

describe('SharedCurrencyListComponent', () => {
  let component: SharedCurrencyListComponent;
  let fixture: ComponentFixture<SharedCurrencyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedCurrencyListComponent]
    });
    fixture = TestBed.createComponent(SharedCurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
