import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBoqItemListComponent } from './shared-boq-item-list.component';

describe('SharedBoqItemListComponent', () => {
  let component: SharedBoqItemListComponent;
  let fixture: ComponentFixture<SharedBoqItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedBoqItemListComponent]
    });
    fixture = TestBed.createComponent(SharedBoqItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
