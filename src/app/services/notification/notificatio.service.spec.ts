import { TestBed } from '@angular/core/testing';

import { NotificatioService } from './notificatio.service';

describe('NotificatioService', () => {
  let service: NotificatioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificatioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
