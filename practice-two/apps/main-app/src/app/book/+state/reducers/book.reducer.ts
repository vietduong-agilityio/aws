// Import action interface
import { Action } from '@ngrx/store';

// Import model of module
import { Book } from '../../models/book.model';

// Import internal actions
import { ActionTypes } from '../actions/book.action-type';

// Import internal states
import * as State from '../states/book.state';

// The initial value of state, begin with an empty array
const initialBookState: State.BookState = [];

export function bookReducer(state = initialBookState, action: Action): State.BookState {
  switch (action.type) {
    /**
     * If type of action is LOAD_SUCCESS, return list book in payload
     */
    case ActionTypes.LOAD_SUCCESS: {
      return action.payload;
    }

    /**
     * If not match above cases, return the previous state
     */
    default: {
      return state;
    }
  }
}
