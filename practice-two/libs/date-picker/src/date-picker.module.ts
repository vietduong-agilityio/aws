// Import core and common modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import angular modules
import { BrowserModule } from '@angular/platform-browser';
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import internal components
import { DatePickerComponent } from './date-picker/date-picker.component';

const Modules: any = [
  CommonModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgbModule
];

const Components: any =[
  DatePickerComponent
];

@NgModule({
  imports: [
    ...Modules
  ],
  declarations: [
    ...Components
  ],
  exports: [
    ...Components
  ]
})
export class DatePickerModule {
}
