import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, XHRBackend, BaseRequestOptions, Http} from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { BannerComponent } from './banner/banner.component';
import { DoublePipe } from './double.pipe';
import {ToDoService} from "./to-do.service";
import {MockBackend} from "@angular/http/testing";
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    BannerComponent,
    DoublePipe,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ToDoService,
    //{provide: XHRBackend, useClass: MockBackend }],
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend, opts) => {
        return new Http(backend, opts)
      }

    }]
    ,bootstrap: [AppComponent]
})
export class AppModule { }
