import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ToDo} from "./Models/ToDo";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {Observable} from "rxjs";

@Injectable()
export class ToDoService {

  todoList: Array<ToDo> = [
    { task: "Laundry" },
    { task: "whatever"}
  ];

  constructor(private http:Http) { }


  public findAll() {
    return this.http.get('/todos');
  }

  public add()
  {
    return this.http.post('/todos',  { 'task' : "cooking" });

  }



}
