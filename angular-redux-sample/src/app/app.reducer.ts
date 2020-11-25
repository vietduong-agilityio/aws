import { counterReducer } from './counter/state-management/counter-reducer';
import {
  CounterState,
  initialCounter
} from './counter/state-management/counter-state';
import {
  TodoState,
  initialTodos
} from './todo/state-management/todo-state';
import { todoReducer } from './todo/state-management/todo-reducer';
import { Reducer } from './interfaces/reducer';

export interface AppState {
  todos: TodoState;
  counter: CounterState;
}

export const initialAppState: AppState = {
  todos: initialTodos,
  counter: initialCounter
};

export const combineReducer: Reducer<AppState> = (initState: AppState = initialAppState, action) => {
  return {
    todos: todoReducer(initState.todos, action),
    counter: counterReducer(initState.counter, action)
  };
};

