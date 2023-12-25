import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCompanyListComponent } from './shared-company-list.component';

describe('SharedCompanyListComponent', () => {
  let component: SharedCompanyListComponent;
  let fixture: ComponentFixture<SharedCompanyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedCompanyListComponent]
    });
    fixture = TestBed.createComponent(SharedCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
