import { TestBed } from '@angular/core/testing';

import { HireMangerService } from './hire-manger.service';

describe('HireMangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HireMangerService = TestBed.get(HireMangerService);
    expect(service).toBeTruthy();
  });
});
