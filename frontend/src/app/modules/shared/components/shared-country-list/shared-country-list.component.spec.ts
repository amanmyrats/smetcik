import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCountryListComponent } from './shared-country-list.component';

describe('SharedCountryListComponent', () => {
  let component: SharedCountryListComponent;
  let fixture: ComponentFixture<SharedCountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedCountryListComponent]
    });
    fixture = TestBed.createComponent(SharedCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
