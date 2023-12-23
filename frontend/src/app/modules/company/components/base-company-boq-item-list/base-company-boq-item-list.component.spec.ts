import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCompanyBoqItemListComponent } from './base-company-boq-item-list.component';

describe('BaseCompanyBoqItemListComponent', () => {
  let component: BaseCompanyBoqItemListComponent;
  let fixture: ComponentFixture<BaseCompanyBoqItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseCompanyBoqItemListComponent]
    });
    fixture = TestBed.createComponent(BaseCompanyBoqItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
