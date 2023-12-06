import { TestBed } from '@angular/core/testing';

import { BoqItemService } from './boq-item.service';

describe('BoqItemService', () => {
  let service: BoqItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoqItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
