import { Injectable } from '@angular/core';

@Injectable()
export class TestservService {

  private students = [];
  constructor() { }

  addStudent(student){
    this.students.push(student);

  }

  getStudent(index){
    return this.students[index];

  }
}
