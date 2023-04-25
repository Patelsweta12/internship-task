import { TestBed } from '@angular/core/testing';

import { ObservablesServiceService } from './observables-service.service';

describe('ObservablesServiceService', () => {
  let service: ObservablesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
