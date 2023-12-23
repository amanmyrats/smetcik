import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompanyTradeListComponent } from './base-company-trade-list.component';

describe('BaseCompanyTradeListComponent', () => {
  let component: BaseCompanyTradeListComponent;
  let fixture: ComponentFixture<BaseCompanyTradeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCompanyTradeListComponent]
    });
    fixture = TestBed.createComponent(BaseCompanyTradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
