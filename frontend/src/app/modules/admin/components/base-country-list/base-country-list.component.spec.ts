import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCountryListComponent } from './base-country-list.component';

describe('BaseCountryListComponent', () => {
  let component: BaseCountryListComponent;
  let fixture: ComponentFixture<BaseCountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCountryListComponent]
    });
    fixture = TestBed.createComponent(BaseCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
