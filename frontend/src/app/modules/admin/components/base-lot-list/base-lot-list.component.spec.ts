import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLotListComponent } from './base-lot-list.component';

describe('BaseLotListComponent', () => {
  let component: BaseLotListComponent;
  let fixture: ComponentFixture<BaseLotListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseLotListComponent]
    });
    fixture = TestBed.createComponent(BaseLotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
