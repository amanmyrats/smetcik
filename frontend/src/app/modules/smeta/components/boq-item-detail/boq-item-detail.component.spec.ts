import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqItemDetailComponent } from './boq-item-detail.component';

describe('BoqItemDetailComponent', () => {
  let component: BoqItemDetailComponent;
  let fixture: ComponentFixture<BoqItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoqItemDetailComponent]
    });
    fixture = TestBed.createComponent(BoqItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
