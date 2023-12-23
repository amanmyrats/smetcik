import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompnyTradeListComponent } from './base-compny-trade-list.component';

describe('BaseCompnyTradeListComponent', () => {
  let component: BaseCompnyTradeListComponent;
  let fixture: ComponentFixture<BaseCompnyTradeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCompnyTradeListComponent]
    });
    fixture = TestBed.createComponent(BaseCompnyTradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
