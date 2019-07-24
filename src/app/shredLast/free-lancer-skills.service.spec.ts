import { TestBed } from '@angular/core/testing';

import { FreeLancerSkillsService } from './free-lancer-skills.service';

describe('FreeLancerSkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeLancerSkillsService = TestBed.get(FreeLancerSkillsService);
    expect(service).toBeTruthy();
  });
});
