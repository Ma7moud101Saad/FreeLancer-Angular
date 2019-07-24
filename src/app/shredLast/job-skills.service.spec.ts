import { TestBed } from '@angular/core/testing';

import { JobSkillsService } from './job-skills.service';

describe('JobSkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobSkillsService = TestBed.get(JobSkillsService);
    expect(service).toBeTruthy();
  });
});
