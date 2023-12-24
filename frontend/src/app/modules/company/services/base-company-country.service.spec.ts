import { TestBed } from '@angular/core/testing';

import { BaseCompanyCountryService } from './base-company-country.service';

describe('BaseCompanyCountryService', () => {
  let service: BaseCompanyCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCompanyCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
