import { AppState } from './../app.reducer';
import {
  Component,
  OnInit
} from '@angular/core';

import { TodoState } from './state-management/todo-state';
import { Store } from '../store/store';
import {
  initialAppState,
  combineReducer
} from '../app.reducer';
import { addTodo } from './state-management/todo-action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    store: Store<AppState>
  ) {
    store.subscribe(newState => console.log('TODO:', newState.todos));

    // store.select('todos').subscribe(data => {
    //   console.log('TODO', data);
    // });

    store.dispatch(addTodo(
      {
        id: 1,
        content: 'Hello 111'
      }
    ));
  }

  ngOnInit() {
  }

}
