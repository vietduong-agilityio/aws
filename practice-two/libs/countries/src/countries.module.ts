// Import core and common modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import form modules
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';

// Import internal elements
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './countries/services/countries.service';

const Modules: any = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const Providers: any = [
  CountriesService
];

@NgModule({
  imports: [
    ...Modules
  ],
  declarations: [
    CountriesComponent
  ],
  exports: [
    CountriesComponent
  ],
  providers: [
    ...Providers
  ]
})
export class CountriesModule {
}
