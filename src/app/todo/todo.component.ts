import { Component, OnInit } from '@angular/core';
import {ToDoService} from "../to-do.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todoItems;
  private todoItem: string = "";

  constructor(private todoService: ToDoService
              ,private router: Router) { }

  ngOnInit() {

    this.todoService.findAll().subscribe(
      (todoItems) => {
      this.todoItems = todoItems;
    }
    , () => {
        this.router.navigate(['/error']);
            }
    )


  }

  public add()
  {
    this.todoItems.push(this.todoItem);
    //this.todoService.add().subscribe( );
  }
}
