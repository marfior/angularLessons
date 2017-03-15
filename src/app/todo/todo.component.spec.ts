/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoComponent } from './todo.component';
import {ToDoService} from "../to-do.service";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoServiceSpyObj = jasmine.createSpyObj('ToDoService','findAll');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
      providers: { provide: ToDoService, useValue: todoServiceSpyObj}
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Todo items', async(() => {
    const fixture = TestBed.createComponent(TodoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;


//    spyOn(service, 'findAll').and.return([]);   when to test the service from the component

    expect(compiled.querySelector('li').textContent).toContain('Laundry');
  }));


});
