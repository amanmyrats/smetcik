import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqFormComponent } from './boq-form.component';

describe('BoqFormComponent', () => {
  let component: BoqFormComponent;
  let fixture: ComponentFixture<BoqFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoqFormComponent]
    });
    fixture = TestBed.createComponent(BoqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
