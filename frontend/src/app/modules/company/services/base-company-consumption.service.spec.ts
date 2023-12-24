import { TestBed } from '@angular/core/testing';

import { BaseCompanyConsumptionService } from './base-company-consumption.service';

describe('BaseCompanyConsumptionService', () => {
  let service: BaseCompanyConsumptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCompanyConsumptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
