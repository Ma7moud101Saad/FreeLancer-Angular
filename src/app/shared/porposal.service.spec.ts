import { TestBed } from '@angular/core/testing';

import { PorposalService } from './porposal.service';

describe('PorposalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PorposalService = TestBed.get(PorposalService);
    expect(service).toBeTruthy();
  });
});
