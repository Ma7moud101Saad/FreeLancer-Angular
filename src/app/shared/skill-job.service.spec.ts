import { TestBed } from '@angular/core/testing';

import { SkillJobService } from './skill-job.service';

describe('SkillJobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillJobService = TestBed.get(SkillJobService);
    expect(service).toBeTruthy();
  });
});
