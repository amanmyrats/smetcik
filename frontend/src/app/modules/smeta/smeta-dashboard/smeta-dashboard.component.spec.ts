import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmetaDashboardComponent } from './smeta-dashboard.component';

describe('SmetaDashboardComponent', () => {
  let component: SmetaDashboardComponent;
  let fixture: ComponentFixture<SmetaDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmetaDashboardComponent]
    });
    fixture = TestBed.createComponent(SmetaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
