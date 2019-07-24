import { TestBed } from '@angular/core/testing';

import { JobitemService } from './jobitem.service';

describe('JobitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobitemService = TestBed.get(JobitemService);
    expect(service).toBeTruthy();
  });
});
