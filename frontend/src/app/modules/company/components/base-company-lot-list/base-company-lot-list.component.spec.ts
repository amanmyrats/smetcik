import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompanyLotListComponent } from './base-company-lot-list.component';

describe('BaseCompanyLotListComponent', () => {
  let component: BaseCompanyLotListComponent;
  let fixture: ComponentFixture<BaseCompanyLotListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCompanyLotListComponent]
    });
    fixture = TestBed.createComponent(BaseCompanyLotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
