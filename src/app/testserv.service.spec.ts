/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestservService } from './testserv.service';

describe('TestservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestservService]
    });
  });

  it('should add student', inject([TestservService], (service: TestservService) => {
    let student = {'name':'jordan'};
    service.addStudent(student);
    expect(service.getStudent(0)).toBe(student);
    expect(service).toBeTruthy();
  }));
});
