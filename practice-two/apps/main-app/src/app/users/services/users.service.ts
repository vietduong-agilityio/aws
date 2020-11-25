// Import core modules
import { Injectable } from '@angular/core';

// Import library for reactive programming using Observables
import { Observable } from 'rxjs/Observable';

// Import model of module
import { Users } from '../model/users.model';

// Import rxjs elements
import { Subject } from 'rxjs/Subject';

// Import app services
import { AppConfigService } from '@main-app/core/services/app-config.service';
import { HttpInterceptorService } from '@main-app/core/services/http-interceptor.service';
import { LocalStorageService } from '@main-app/core/services/local-storage.service';

@Injectable()
export class UsersService {
  // User name to display when login
  userName$: Subject<string> = new Subject<string>();

  constructor(
    private httpInterceptor: HttpInterceptorService,
    private storage: LocalStorageService
  ) { }

  /**
   * Function to check information of user correct or not
   * @param email: String - Email of user
   * @param pass : String - Password of user
   */
  getUser(email, pass): Observable<Users> {
    return this.httpInterceptor
     .get(`${AppConfigService.defaultUrl.baseUrl}users?email=${email}&pass=${pass}`)
  }

  /**
   * Function to add user to local storage
   * @param user: Users - Object User to add to local storage
   */
  setCurrentUser(user) {
    this.storage.setStorage('current-user', user);
  }

  /**
   * Function to get user in local storage
   * @returns Users
   */
  getCurrentUser(): Users {
    return this.storage.getStorage('current-user');
  }

  /**
   * Function to check user login or not
   */
  isExistUser() {
    if (this.getCurrentUser().name) {
      return this.getCurrentUser().name;
    } else {
      return 'my account';
    }
  }
}
