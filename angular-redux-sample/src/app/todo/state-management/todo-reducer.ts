import { Action } from './../../interfaces/action';
import { Todo } from './../model/todo.model';
import { Reducer } from '../../interfaces/reducer';
import {
  initialTodos,
  TodoState
} from './todo-state';

export function todoReducer(state: TodoState = initialTodos, action: Action): TodoState {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos : state.todos.concat(action.payload)
      }
    );

    default:
      return state;
  }
}
