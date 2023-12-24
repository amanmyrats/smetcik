import { TestBed } from '@angular/core/testing';

import { BaseCompanyLotService } from './base-company-lot.service';

describe('BaseCompanyLotService', () => {
  let service: BaseCompanyLotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCompanyLotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
