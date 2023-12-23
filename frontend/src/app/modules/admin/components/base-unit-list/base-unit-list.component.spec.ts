import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUnitListComponent } from './base-unit-list.component';

describe('BaseUnitListComponent', () => {
  let component: BaseUnitListComponent;
  let fixture: ComponentFixture<BaseUnitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseUnitListComponent]
    });
    fixture = TestBed.createComponent(BaseUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
