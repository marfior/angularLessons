import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { BannerComponent } from './banner/banner.component';
import { DoublePipe } from './double.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    BannerComponent,
    DoublePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
