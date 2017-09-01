import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchDevsComponent } from './search-devs/search-devs.component';

import { SearchDevsService } from './search-devs.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchDevsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SearchDevsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
