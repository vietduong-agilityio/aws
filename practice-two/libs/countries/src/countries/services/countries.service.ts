// Import core modules
import { Injectable } from '@angular/core';

// Import external elements
import { AppConfigService } from '@main-app/core/services/app-config.service';
import { HttpInterceptorService } from '@main-app/core/services/http-interceptor.service';

@Injectable()
export class CountriesService {

  constructor(
    private httpInterceptor: HttpInterceptorService
  ) { }

  /**
   * Function to load list countries from json server
   */
  loadCountries() {
    return this.httpInterceptor.get(`${AppConfigService.defaultUrl.baseUrl}countries`);
  }

}
