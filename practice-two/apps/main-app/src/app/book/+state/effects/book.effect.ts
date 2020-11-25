// Import core modules
import { Injectable } from '@angular/core';

// Import ngrx modules, interfaces
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

// Import rxjs operators
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

// Import internal srevices, actions
import { BookService } from '../../services/book.service';
import { BookActions } from '../actions/book.action';
import { ActionTypes } from '../actions/book.action-type';

@Injectable()
export class BookEffect {
  constructor(private actions$: Actions, private bookService: BookService, private bookAction: BookActions) {}

  /**
   * Create a loadBooks$ effect that describes a source
   * of request load books action
   */
  @Effect()
  loadBooks$ = this.actions$
    // Listen for the 'REQUEST_ITEMS' action
    .ofType(ActionTypes.REQUEST_ITEMS)
    .switchMap(action => this.bookService.loadBooks(action.payload))
    .map((books: any) => this.bookAction.loadBooksSuccess(books))
    // If request fails, dispatch failed action with empty value
    .catch(err => Observable.of(this.bookAction.loadBooksFail(err)));
}
