import { TestBed } from '@angular/core/testing';

import { AddRemoveEmployeeService } from './add-remove-employee.service';

describe('AddRemoveEmployeeService', () => {
  let service: AddRemoveEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRemoveEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
