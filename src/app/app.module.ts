import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoComponent } from './todo.companent';
import { Todo2Component } from './todo2/todo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    Todo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Todo2Component]
})
export class AppModule { }
