// Import core modules
import { Injectable } from '@angular/core';

// Import interface action of ngrx
import { Action } from '@ngrx/store';

// Import internal elements
import { ActionTypes } from './checkout.action-type';
import { Checkout } from './../../models/checkout.model';

@Injectable()
/**
 * Action creators, list all of actions that we want to dispatch
 * Effect will catch an action, handle data, return new action and
 * notify the app that the state has been updated
 */
export class CheckoutActions {
  /**
   * Action request add checkout
   * Return action ADD_ITEM with payload is the check to add
   * @param {checkout: Checkout}     - Checkout object to add
   */
  addCheckout(checkout: Checkout): Action {
    return {
      type: ActionTypes.ADD_ITEM,
      payload: checkout
    }
  }

  /**
   * Action add new checkout
   * Return action ADD_ITEM_SUCCESS with payload is a Checkout to add
   * @param {checkout: Checkout}     - Checkout object to add to server
   */
  addCheckoutSuccess(checkout: Checkout): Action {
    return {
      type: ActionTypes.ADD_ITEM_SUCCESS,
      payload: checkout
    };
  }

  /**
   * Action add checkout fail
   * Return action ADD_ITEM_FAIL with payload is error message
   * @param {msg: String}          - Error message
   */
  addCheckoutFail(msg: String): Action {
    return {
      type: ActionTypes.ADD_ITEM_FAIL,
      payload: msg
    }
  }
}