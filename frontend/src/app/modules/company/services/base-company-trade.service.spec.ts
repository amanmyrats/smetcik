import { TestBed } from '@angular/core/testing';

import { BaseCompanyTradeService } from './base-company-trade.service';

describe('BaseCompanyTradeService', () => {
  let service: BaseCompanyTradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCompanyTradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
