import { Component } from '@angular/core';
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Response, RequestMethod, ResponseOptions} from "@angular/http";
import {Observable} from "rxjs";

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
/*


    backend.connections.subscribe( (connection: MockConnection) => {
        //debugger;

        if (connection.request.method === RequestMethod.Post)
        {
          let obsvResp = Observable.of({"todo":"tasktodo"}).delay(4000);

          obsvResp.subscribe( (r: Object) => {
            connection.mockRespond(new Response(<any> r));
            console.log("test delay" + r);
          }

          ,(r: Object) => { connection.mockError(new Error("Internal Server ERror")) }
                                //new Response(
                                //          new ResponseOptions({
                                //              body: JSON.stringify({error: 'Internal serever Error'}),
                                //              status: 500,
                                //          })
                                //) ) }
          );

        }
        else {
          connection.mockRespond(new Response(<any>{
              body: JSON.stringify(todoList)
            }
          ))
        }
      }
    )
    */



    //backend.connections.method()





  }



}


