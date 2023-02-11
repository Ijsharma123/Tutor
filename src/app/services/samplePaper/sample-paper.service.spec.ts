import { TestBed } from '@angular/core/testing';

import { SamplePaperService } from './sample-paper.service';

describe('SamplePaperService', () => {
  let service: SamplePaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplePaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
