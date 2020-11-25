// Import action interface
import { Action } from '@ngrx/store';

// Import model of module
import { Checkout } from '../../models/checkout.model';

// Import internal actions
import { ActionTypes } from '../actions/checkout.action-type';

// Import internal states
import * as State from '../states/checkout.state';

// The initial value of state, begin with an empty array
export const initialCheckoutState: State.CheckoutState = [];

export function checkoutReducer(
  state = initialCheckoutState, 
  action: Action
): State.CheckoutState {
  switch (action.type) {
    /**
     * If type of action is ADD_ITEM_SUCCESS, get country from payload
     * and add into list state
     */
    case ActionTypes.ADD_ITEM_SUCCESS: {
      return [
        ...state,
        ...action.payload
      ]
    }

    /**
     * If not match above cases, return the previous state
     */
    default: {
      return state;
    }
  }
}