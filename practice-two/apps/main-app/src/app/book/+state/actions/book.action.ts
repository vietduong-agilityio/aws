// Import core modules
import { Injectable } from '@angular/core';

// Import interface action of ngrx
import { Action } from '@ngrx/store';

// Import internal action list
import { ActionTypes } from './book.action-type';

@Injectable()
/**
 * Action creators, list all of actions that we want to dispatch
 * Effect will catch an action, handle data, return new action and
 * notify the app that the state has been updated
 */
export class BookActions {
  /**
   * Action request load list books
   * Return action REQUEST_ITEMS to get list books
   * @param {filter: string}              - Value to filter list book
   */
  loadBooks(filter): Action {
    return {
      type: ActionTypes.REQUEST_ITEMS,
      payload: filter
    };
  }

  /**
   * Action load list books success
   * Return action LOAD_SUCCESS with payload are the list books
   * @param {books: Book[]}     - List books returned
   */
  loadBooksSuccess(books): Action {
    return {
      type: ActionTypes.LOAD_SUCCESS,
      payload: books
    };
  }

  /**
   * Action load list books fail
   * Return action LOAD_FAIL with payload is error message
   * @param {msg: String}                 - Error message
   */
  loadBooksFail(msg): Action {
    return {
      type: ActionTypes.LOAD_FAIL,
      payload: msg
    };
  }
}
