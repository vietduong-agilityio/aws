import { Todo } from './../model/todo.model';
import { Action } from './../../interfaces/action';

export const addTodo = (todo: Todo): Action => {
  return {
    type: 'ADD_TODO',
    payload: todo
  };
};

export const editTodo = (todo: Todo): Action => {
  return {
    type: 'EDIT_TODO',
    payload: todo
  };
};

export const deleteTodo = (id: number): Action => {
  return {
    type: 'DELETE_TODO',
    payload: id
  };
};
