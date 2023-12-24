import { TestBed } from '@angular/core/testing';

import { BaseCompanyUnitService } from './base-company-unit.service';

describe('BaseCompanyUnitService', () => {
  let service: BaseCompanyUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCompanyUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
