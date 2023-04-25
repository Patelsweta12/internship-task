import { TestBed } from '@angular/core/testing';

import { AddRemoveEmpService } from './add-remove-emp.service';

describe('AddRemoveEmpService', () => {
  let service: AddRemoveEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRemoveEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
