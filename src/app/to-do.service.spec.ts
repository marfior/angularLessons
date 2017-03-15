/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToDoService } from './to-do.service';

describe('ToDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoService]
    });
  });

  it('should add to ToDo List', inject([ToDoService], (service: ToDoService) => {
    let todo = {'task':'testtodo'};
    service.add();
    spyOn(service, 'add');

    expect(service).toBeTruthy();

  }));

  it('should get All ToDo List', inject([ToDoService], (service: ToDoService) => {
    spyOn(service, 'findAll');
    service.findAll();
    expect(service.findAll()).toHaveBeenCalled();
    expect(service).toBeTruthy();

  }));
});
