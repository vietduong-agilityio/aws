// Import core module
import { Injectable } from '@angular/core';

// Import environment
import { environment } from '@env/environment';

@Injectable()
export class AppConfigService {
  constructor() {}

  /**
   * Object contains url constants
   */
  static defaultUrl = {
    // Url to server
    baseUrl: environment.API_ROOT
  };

  static defaultMessage = {
    // Message inform add success
    addSuccess: 'Add success',

    // Message inform login fail
    loginFail: 'Email or password incorrect',
  };
}
