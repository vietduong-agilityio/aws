import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { BookingComponent } from './booking/booking.component';
import { RoomComponent } from './room/room.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BuildingComponent } from './building/building.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    RoomComponent,
    AddBookingComponent,
    BuildingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
