import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTradeListComponent } from './shared-trade-list.component';

describe('SharedTradeListComponent', () => {
  let component: SharedTradeListComponent;
  let fixture: ComponentFixture<SharedTradeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedTradeListComponent]
    });
    fixture = TestBed.createComponent(SharedTradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
