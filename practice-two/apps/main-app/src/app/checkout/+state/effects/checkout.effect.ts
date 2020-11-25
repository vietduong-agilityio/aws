// Import modules of angular core
import { Injectable } from '@angular/core';

// Import modules, interfaces of ngrx
import {
  Actions,
  Effect
} from '@ngrx/effects';
import { Action } from "@ngrx/store";

// Import operators of rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Operator } from "rxjs/Operator";

// Import internal services, actions
import { CheckoutService } from '../../services/checkout.service';
import {
  CheckoutActions,
} from '../actions/checkout.action';
import {
  ActionTypes,
} from '../actions/checkout.action-type';

// Import model of module
import { Checkout } from '../../models/checkout.model';

declare module "@ngrx/effects/src/actions" {
  interface Actions {
    lift<R>(operator: Operator<Action, R>): Observable<R>;
  }
}

@Injectable()
export class CheckoutEffect {
  constructor(
    private actions$: Actions,
    private checkoutService: CheckoutService,
    private checkoutAction: CheckoutActions
  ) { }

  /**
   * Create a addCheckout$ effect that describes a source
   * of add checkout action
   */
  @Effect()
  addCheckout$ = this.actions$
    // Listen for the 'ADD_ITEM' action
    .ofType(ActionTypes.ADD_ITEM)
    .map(action => action.payload)
    .switchMap(checkout => this.checkoutService.addBill(checkout))
    .map(checkout => this.checkoutAction.addCheckoutSuccess(checkout))
    // If request fails, dispatch failed action with null value
    .catch((err) => Observable.of(this.checkoutAction.addCheckoutFail(err)));

}