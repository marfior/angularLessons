import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, XHRBackend, BaseRequestOptions, Http} from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { BannerComponent } from './banner/banner.component';
import { DoublePipe } from './double.pipe';
import {ToDoService} from "./to-do.service";
import {MockBackend} from "@angular/http/testing";
import { TodoComponent } from './todo/todo.component';
import { ErrorComponent } from './error/error.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import { CounterComponent } from './counter/counter.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import {NumbersService} from "./numbers.service";

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    BannerComponent,
    DoublePipe,
    TodoComponent,
    ErrorComponent,
    CounterComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,

  ],
  providers: [ToDoService,
    NumbersService,
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: HttpFactory
    }]
    ,bootstrap: [AppComponent]
})
export class AppModule { }


export function HttpFactory(backend, opts) {
  return new Http(backend, opts)
}
