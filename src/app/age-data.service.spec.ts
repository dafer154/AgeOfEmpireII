import { TestBed } from '@angular/core/testing';

import { AgeDataService } from './age-data.service';

describe('AgeDataService', () => {
  let service: AgeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
