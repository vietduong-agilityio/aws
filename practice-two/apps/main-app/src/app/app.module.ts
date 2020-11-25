// Import core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import app component
import { AppComponent } from './app.component';

// Import Nx module
import { NxModule } from '@nrwl/nx';

// Import router module
import { RouterModule } from '@angular/router';

// Import http module
import { HttpModule } from '@angular/http';

// Import ngrx modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Import app modules
import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './book/book.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';
import { CheckoutModule } from './checkout/checkout.module';
import { UsersModule } from './users/users.module';

const Modules: any = [
  BrowserModule,
  NxModule.forRoot(),
  RouterModule,
  HttpModule,
  AppRoutingModule,
  BookModule,
  SharedModule,
  CoreModule,
  OrdersModule,
  CheckoutModule,
  UsersModule,
  EffectsModule.forRoot([]),
  StoreModule.forRoot({})
];

@NgModule({
  imports: [
    ...Modules
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
