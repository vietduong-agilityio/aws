import { Component } from '@angular/core';
import { Action } from './interfaces/action';
import {
  combineReducer,
  AppState,
  initialAppState
} from './app.reducer';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-redux-sample';

  constructor(
    store: Store<AppState>
  ) {

    // Subscribe to store to get new state
    store.subscribe(newState => console.log('NEW STATE:', newState));

    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({
      type: 'PLUS',
      payload: 1000
    });
    store.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: 0,
        content: 'Hello'
      }
    });
  }
}
