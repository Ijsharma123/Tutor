import { TestBed } from '@angular/core/testing';

import { QuestionlistService } from './questionlist.service';

describe('QuestionlistService', () => {
  let service: QuestionlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
