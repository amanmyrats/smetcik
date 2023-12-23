import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBoqItemListComponent } from './base-boq-item-list.component';

describe('BaseBoqItemListComponent', () => {
  let component: BaseBoqItemListComponent;
  let fixture: ComponentFixture<BaseBoqItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseBoqItemListComponent]
    });
    fixture = TestBed.createComponent(BaseBoqItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
