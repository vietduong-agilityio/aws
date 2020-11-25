// Import core and common modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import internal services
import { AppConfigService } from './services/app-config.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { LocalStorageService } from './services/local-storage.service';

const Modules: any = [CommonModule];

const Services: any = [AppConfigService, HttpInterceptorService, LocalStorageService];

@NgModule({
  imports: [...Modules],
  declarations: [],
  providers: [...Services]
})
export class CoreModule {}
