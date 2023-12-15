import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmetaHomeComponent } from './smeta-home.component';

describe('SmetaHomeComponent', () => {
  let component: SmetaHomeComponent;
  let fixture: ComponentFixture<SmetaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmetaHomeComponent]
    });
    fixture = TestBed.createComponent(SmetaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
