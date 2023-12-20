import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceImportComponent } from './resource-import.component';

describe('ResourceImportComponent', () => {
  let component: ResourceImportComponent;
  let fixture: ComponentFixture<ResourceImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceImportComponent]
    });
    fixture = TestBed.createComponent(ResourceImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
