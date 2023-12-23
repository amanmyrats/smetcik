import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompanyResourceListComponent } from './base-company-resource-list.component';

describe('BaseCompanyResourceListComponent', () => {
  let component: BaseCompanyResourceListComponent;
  let fixture: ComponentFixture<BaseCompanyResourceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCompanyResourceListComponent]
    });
    fixture = TestBed.createComponent(BaseCompanyResourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
