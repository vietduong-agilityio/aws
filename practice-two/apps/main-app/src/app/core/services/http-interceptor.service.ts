// Import core modules
import { Injectable } from '@angular/core';

// Import http elements
import { 
  Http, 
  RequestOptions, 
  RequestOptionsArgs, 
  Response, 
  Headers, 
  Request 
} from '@angular/http';

// Import rxjs elements
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpInterceptorService {
  constructor(private http: Http) {}

  /**
   * Get default headers for every request
   */
  getDefaultHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return headers;
  }

  /**
   * Get default options for every request
   */
  getDefaultOptions() {
    let options = new RequestOptions();
    options.headers = this.getDefaultHeaders();

    return options;
  }

  /**
   * Handle response data if call api success, convert to json object
   * @param {Response} res [The return data from server]
   */
  handleResponse(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    let body = res.json();
    return body || {};
  }

  /**
   * Handle error message if call api fail, throw error message
   * @param {any} err error message
   */
  handleError(err: any) {
    let errMsg = err.message || 'Server error';
    return Observable.throw(errMsg);
  }

  /**
   * Get API
   * @param  {string}             url url to API
   */
  get(url: string): Observable<any> {
    return this.http
      .get(url)
      .map(res => this.handleResponse(res))
      .catch(res => this.handleError(res));
  }

  /**
   * Call api with post method
   * @param  {string}             url     [url to API]
   * @param  {any}                body    [data to add to server]
   */
  post(url: string, body: any): Observable<any> {
    return this.http
      .post(url, body, this.getDefaultOptions())
      .map(res => this.handleResponse(res))
      .catch(res => this.handleError(res));
  }

  /**
   * Call api with put method
   * @param  {string}             url     [url to API]
   * @param  {any}                body    [data to edit on server]
   */
  put(url: string, body: any): Observable<any> {
    return this.http
      .put(url, body, this.getDefaultOptions())
      .map(res => this.handleResponse(res))
      .catch(res => this.handleError(res));
  }

  /**
   * Call api with delete method
   * @param  {string}             url     [url to API]
   * @param  {RequestOptionsArgs} options [data to delete on server]
   */
  delete(url: string): Observable<any> {
    return this.http
      .delete(url, this.getDefaultOptions())
      .map(res => this.handleResponse(res))
      .catch(res => this.handleError(res));
  }
}
