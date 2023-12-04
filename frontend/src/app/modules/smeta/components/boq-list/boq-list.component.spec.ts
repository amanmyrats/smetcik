import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoqListComponent } from './boq-list.component';

describe('BoqListComponent', () => {
  let component: BoqListComponent;
  let fixture: ComponentFixture<BoqListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoqListComponent]
    });
    fixture = TestBed.createComponent(BoqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
