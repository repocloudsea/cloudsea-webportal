import { TestBed, inject } from '@angular/core/testing';

import { User.ProfileService } from './user.profile.service';

describe('User.ProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [User.ProfileService]
    });
  });

  it('should be created', inject([User.ProfileService], (service: User.ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
