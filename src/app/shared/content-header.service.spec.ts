import { TestBed } from '@angular/core/testing';

import { ContentHeaderService } from './content-header.service';

describe('ContentHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentHeaderService = TestBed.get(ContentHeaderService);
    expect(service).toBeTruthy();
  });
});
