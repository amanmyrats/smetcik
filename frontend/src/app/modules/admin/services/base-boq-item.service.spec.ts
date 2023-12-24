import { TestBed } from '@angular/core/testing';

import { BaseBoqItemService } from './base-boq-item.service';

describe('BaseBoqItemService', () => {
  let service: BaseBoqItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseBoqItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
