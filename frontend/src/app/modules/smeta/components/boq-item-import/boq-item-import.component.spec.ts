import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqItemImportComponent } from './boq-item-import.component';

describe('BoqItemImportComponent', () => {
  let component: BoqItemImportComponent;
  let fixture: ComponentFixture<BoqItemImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoqItemImportComponent]
    });
    fixture = TestBed.createComponent(BoqItemImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
