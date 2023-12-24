import { TestBed } from '@angular/core/testing';

import { BaseCountryService } from './base-country.service';

describe('BaseCountryService', () => {
  let service: BaseCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
