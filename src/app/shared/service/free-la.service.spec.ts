import { TestBed } from '@angular/core/testing';

import { FreeLaService } from './free-la.service';

describe('FreeLaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeLaService = TestBed.get(FreeLaService);
    expect(service).toBeTruthy();
  });
});
