import { TestBed } from '@angular/core/testing';

import { DerivedDataService } from './derived-data.service';

describe('DerivedDataService', () => {
  let service: DerivedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DerivedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
