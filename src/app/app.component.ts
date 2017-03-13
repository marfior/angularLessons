import { Component } from '@angular/core';
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Response, RequestMethod} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  constructor(backend: MockBackend){
    let todoList = [
      {task: "Laundry", done: false},
      {task: "testt", done: false},
      {task: "more to do", done: false}
    ];

    backend.connections.subscribe( (connection: MockConnection) => {
        debugger;
        if (connection.request.method === RequestMethod.Post)
        {
          connection.mockRespond(new Response(<any>{}));

        }
        else {
          connection.mockRespond(new Response(<any>{
              body: JSON.stringify(todoList)
            }
          ))
        }
      }
    )



    //backend.connections.method()





  }



}


