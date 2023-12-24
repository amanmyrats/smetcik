import { TestBed } from '@angular/core/testing';

import { BaseCompanyCurrencyService } from './base-company-currency.service';

describe('BaseCompanyCurrencyService', () => {
  let service: BaseCompanyCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCompanyCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
