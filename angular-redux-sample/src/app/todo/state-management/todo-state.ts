import { Todo } from '../model/todo.model';

export interface TodoState {
  todos: Todo[];
}

export const initialTodos: TodoState = {
  todos: []
};
