import { TestBed } from '@angular/core/testing';

import { BaseCompanyBoqItemService } from './base-company-boq-item.service';

describe('BaseCompanyBoqItemService', () => {
  let service: BaseCompanyBoqItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCompanyBoqItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
