import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedResourceListComponent } from './shared-resource-list.component';

describe('SharedResourceListComponent', () => {
  let component: SharedResourceListComponent;
  let fixture: ComponentFixture<SharedResourceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedResourceListComponent]
    });
    fixture = TestBed.createComponent(SharedResourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
