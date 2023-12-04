import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqItemListComponent } from './boq-item-list.component';

describe('BoqItemListComponent', () => {
  let component: BoqItemListComponent;
  let fixture: ComponentFixture<BoqItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoqItemListComponent]
    });
    fixture = TestBed.createComponent(BoqItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
