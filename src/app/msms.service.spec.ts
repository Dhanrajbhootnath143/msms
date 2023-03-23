import { TestBed } from '@angular/core/testing';

import { MsmsService } from './msms.service';

describe('MsmsService', () => {
  let service: MsmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
