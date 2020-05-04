/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuardLoggedInService } from './AuthGuardLoggedIn.service';

describe('Service: AuthGuardLoggedIn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardLoggedInService]
    });
  });

  it('should ...', inject([AuthGuardLoggedInService], (service: AuthGuardLoggedInService) => {
    expect(service).toBeTruthy();
  }));
});
