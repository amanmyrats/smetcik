import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqMaterialComponent } from './boq-material.component';

describe('BoqMaterialComponent', () => {
  let component: BoqMaterialComponent;
  let fixture: ComponentFixture<BoqMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoqMaterialComponent]
    });
    fixture = TestBed.createComponent(BoqMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
