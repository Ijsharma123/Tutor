import { TestBed } from '@angular/core/testing';

import { SetListService } from './set-list.service';

describe('SetListService', () => {
  let service: SetListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
