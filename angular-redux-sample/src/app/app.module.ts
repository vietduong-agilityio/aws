import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { TodoComponent } from './todo/todo.component';
import { Store } from './store/store';
import {
  AppState,
  initialAppState,
  combineReducer
} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(combineReducer, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
