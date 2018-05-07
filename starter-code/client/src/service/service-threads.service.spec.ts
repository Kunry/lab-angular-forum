/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceThreadsService } from './service-threads.service';

describe('Service: ServiceThreads', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceThreadsService]
    });
  });

  it('should ...', inject([ServiceThreadsService], (service: ServiceThreadsService) => {
    expect(service).toBeTruthy();
  }));
});
