import { TestBed } from '@angular/core/testing';

import { UserAnswerService } from './user-answer.service';

describe('UserAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAnswerService = TestBed.get(UserAnswerService);
    expect(service).toBeTruthy();
  });
});
