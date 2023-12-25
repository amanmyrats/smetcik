import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedConsumptionListComponent } from './shared-consumption-list.component';

describe('SharedConsumptionListComponent', () => {
  let component: SharedConsumptionListComponent;
  let fixture: ComponentFixture<SharedConsumptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedConsumptionListComponent]
    });
    fixture = TestBed.createComponent(SharedConsumptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
