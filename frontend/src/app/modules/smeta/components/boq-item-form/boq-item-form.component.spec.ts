import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqItemFormComponent } from './boq-item-form.component';

describe('BoqItemFormComponent', () => {
  let component: BoqItemFormComponent;
  let fixture: ComponentFixture<BoqItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoqItemFormComponent]
    });
    fixture = TestBed.createComponent(BoqItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
