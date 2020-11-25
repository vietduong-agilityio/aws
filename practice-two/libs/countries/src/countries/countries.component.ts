// Import core modules
import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

import { forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

// Import internal elements
import { CountriesService } from './services/countries.service';
import { FormGroup, FormControl, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CountriesComponent),
  multi: true
};

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CountriesComponent implements ControlValueAccessor {
  // Implement methods of Control value accessor interface
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  @Input() formControl: FormControl;

  // List countries get from json server
  countries: any = [];

  constructor(
    private countriesService: CountriesService
  ) { 
    this.countriesService.loadCountries().subscribe(res => {
      this.countries = res;
    })
  }

  ngOnInit() {
  }
  writeValue(value: any): void {
  }
}
