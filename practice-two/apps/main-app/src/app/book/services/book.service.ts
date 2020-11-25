// Import core modules
import { Injectable } from '@angular/core';

// Import library for reactive programming using Observables
import { Observable } from 'rxjs/Observable';

// Import model of module
import { Book } from '../models/book.model';

// Import app services
import { AppConfigService } from '@main-app/core/services/app-config.service';
import { HttpInterceptorService } from '@main-app/core/services/http-interceptor.service';

@Injectable()
export class BookService {
  constructor(
    private httpInterceptor: HttpInterceptorService
  ) { }

  /**
   * Call API to get list all book or search by filter
   * @param {filter: Object}       - An object contain name of Book have to search
   */
  loadBooks(filter): Observable<Book[]> {
    // If filter param not empty, load list book by name
    if (filter) {
      return this.httpInterceptor.get(`${AppConfigService.defaultUrl.baseUrl}books?name=${filter}`);
    }

    // If filter param empty, load full list
    return this.httpInterceptor.get(`${AppConfigService.defaultUrl.baseUrl}books`);
  }

  /**
   * Call API to get a book by ID
   * @param {id: string}            - Id of book object have to get on server
   */
  getBook(id: string): Observable<Book> {
    return this.httpInterceptor
      .get(`${AppConfigService.defaultUrl.baseUrl}books?id=${id}`);
  }
}
