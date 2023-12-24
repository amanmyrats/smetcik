import { TestBed } from '@angular/core/testing';

import { BaseConsumptionService } from './base-consumption.service';

describe('BaseConsumptionService', () => {
  let service: BaseConsumptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseConsumptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
