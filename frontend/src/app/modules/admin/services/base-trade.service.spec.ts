import { TestBed } from '@angular/core/testing';

import { BaseTradeService } from './base-trade.service';

describe('BaseTradeService', () => {
  let service: BaseTradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseTradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
