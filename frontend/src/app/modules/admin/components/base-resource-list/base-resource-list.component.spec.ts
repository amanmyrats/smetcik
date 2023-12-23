import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseResourceListComponent } from './base-resource-list.component';

describe('BaseResourceListComponent', () => {
  let component: BaseResourceListComponent;
  let fixture: ComponentFixture<BaseResourceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseResourceListComponent]
    });
    fixture = TestBed.createComponent(BaseResourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
