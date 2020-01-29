import { TestBed } from '@angular/core/testing';

import { MemberDetailService } from './member-detail.service';

describe('MemberDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberDetailService = TestBed.get(MemberDetailService);
    expect(service).toBeTruthy();
  });
});
