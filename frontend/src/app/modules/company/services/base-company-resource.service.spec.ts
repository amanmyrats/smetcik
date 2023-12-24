import { TestBed } from '@angular/core/testing';

import { BaseCompanyResourceService } from './base-company-resource.service';

describe('BaseCompanyResourceService', () => {
  let service: BaseCompanyResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCompanyResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
