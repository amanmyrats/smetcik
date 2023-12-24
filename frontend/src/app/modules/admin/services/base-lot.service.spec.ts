import { TestBed } from '@angular/core/testing';

import { BaseLotService } from './base-lot.service';

describe('BaseLotService', () => {
  let service: BaseLotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseLotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
