import { TestBed } from '@angular/core/testing';

import { BaseUnitService } from './base-unit.service';

describe('BaseUnitService', () => {
  let service: BaseUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
