import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLotListComponent } from './shared-lot-list.component';

describe('SharedLotListComponent', () => {
  let component: SharedLotListComponent;
  let fixture: ComponentFixture<SharedLotListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedLotListComponent]
    });
    fixture = TestBed.createComponent(SharedLotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
