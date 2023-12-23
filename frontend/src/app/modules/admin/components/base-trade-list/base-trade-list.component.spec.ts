import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTradeListComponent } from './base-trade-list.component';

describe('BaseTradeListComponent', () => {
  let component: BaseTradeListComponent;
  let fixture: ComponentFixture<BaseTradeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseTradeListComponent]
    });
    fixture = TestBed.createComponent(BaseTradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
