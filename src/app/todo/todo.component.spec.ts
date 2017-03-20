/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoComponent } from './todo.component';
import {ToDoService} from "../to-do.service";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";
import {HttpModule, XHRBackend, BaseRequestOptions, Http} from "@angular/http";
import {RouterModule, Router} from "@angular/router";
import {appRoutes} from "../app.routes";
import {ErrorComponent} from "../error/error.component";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  let fakeTodoService = jasmine.createSpyObj('ToDoService',['findAll']);
  let fakeRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [
        FormsModule,
        HttpModule
      ],
      providers: [
        { provide: ToDoService, useValue: fakeTodoService},
        { provide: Router, useValue: fakeRouter}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fakeTodoService.findAll.and.returnValue(Observable.of([ { task: "testtask" } ]
    ));

    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


  it('should render Todo items', async(() => {
    debugger;

    const fixture = TestBed.createComponent(TodoComponent);

    //fakeTodoService.findAll.and.returnValue(Observable.of([ { task: "testtask" } ]
    //));

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;


//    spyOn(service, 'findAll').and.return([]);   when to test the service from the component
    expect(compiled.querySelector('li').textContent).toContain('testtask');
  }));


});
