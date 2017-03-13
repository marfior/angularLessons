import { Component, OnInit } from '@angular/core';
import {ToDoService} from "../to-do.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todoItems;
  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    this.todoService.findAll().subscribe( (todoItems) => {
      this.todoItems = todoItems;
    })

    this.todoService.add().subscribe( (todoItem) => {

    }
  }

}
