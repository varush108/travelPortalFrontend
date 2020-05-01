/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Login.serviceService } from './login.service.service';

describe('Service: Login.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Login.serviceService]
    });
  });

  it('should ...', inject([Login.serviceService], (service: Login.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
