import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqDetailComponent } from './boq-detail.component';

describe('BoqDetailComponent', () => {
  let component: BoqDetailComponent;
  let fixture: ComponentFixture<BoqDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoqDetailComponent]
    });
    fixture = TestBed.createComponent(BoqDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
