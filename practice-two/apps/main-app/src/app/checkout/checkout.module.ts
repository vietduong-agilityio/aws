// Import core and common modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import form modules
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';

// Import ngrx modules
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";

// Import internal elements
import { CheckoutComponent } from './checkout.component';
import { CheckoutService } from './services/checkout.service';
import { CheckoutActions } from './+state/actions/checkout.action';

// Import reducer, effect to work with state
import { checkoutReducer } from './+state/reducers/checkout.reducer';
import { CheckoutEffect } from './+state/effects/checkout.effect';

// Import external modules
import { OrdersModule } from '@main-app/orders/orders.module';
import { CountriesModule } from '@libs/countries/src/countries.module';
import { DatePickerModule } from '@libs/date-picker/src/date-picker.module';

const Modules: any = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CountriesModule,
  OrdersModule,
  DatePickerModule,
  StoreModule.forFeature('checkout', checkoutReducer),
  EffectsModule.forFeature([CheckoutEffect])
];

const Components: any = [
  CheckoutComponent
];

const Providers: any = [
  CheckoutService,
  CheckoutActions
];

@NgModule({
  imports: [
    ...Modules
  ],
  declarations: [
    ...Components
  ],
  providers: [
    ...Providers
  ]
})
export class CheckoutModule { }
