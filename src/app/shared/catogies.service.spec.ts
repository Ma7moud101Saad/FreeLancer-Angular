import { TestBed } from '@angular/core/testing';

import { CatogiesService } from './catogies.service';

describe('CatogiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatogiesService = TestBed.get(CatogiesService);
    expect(service).toBeTruthy();
  });
});
