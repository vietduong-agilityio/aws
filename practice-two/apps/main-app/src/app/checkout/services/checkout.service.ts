// Import core module
import { Injectable } from '@angular/core';

// Import library for reactive programming using Observables
import { Observable } from 'rxjs/Observable';

// Import model of module
import { Checkout } from '../models/checkout.model';

// Import app services
import { AppConfigService } from '@main-app/core/services/app-config.service';
import { HttpInterceptorService } from '@main-app/core/services/http-interceptor.service';

@Injectable()
export class CheckoutService {

  constructor(
    private httpInterceptor: HttpInterceptorService
  ) { }

  /**
   * Call API to add new bill
   * @param {checkout: Checkout}      - Checkout object to add to server
   */
  addBill(checkout: Checkout): Observable<Checkout> {
    return this.httpInterceptor
      .post(`${AppConfigService.defaultUrl.baseUrl}bill`, checkout);
  }
}
