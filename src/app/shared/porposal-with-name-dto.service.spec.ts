import { TestBed } from '@angular/core/testing';

import { PorposalWithNameDtoService } from './porposal-with-name-dto.service';

describe('PorposalWithNameDtoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PorposalWithNameDtoService = TestBed.get(PorposalWithNameDtoService);
    expect(service).toBeTruthy();
  });
});
