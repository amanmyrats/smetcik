import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUnitListComponent } from './shared-unit-list.component';

describe('SharedUnitListComponent', () => {
  let component: SharedUnitListComponent;
  let fixture: ComponentFixture<SharedUnitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedUnitListComponent]
    });
    fixture = TestBed.createComponent(SharedUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
