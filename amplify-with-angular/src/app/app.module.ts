import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { BookingComponent } from './booking/booking.component';
import { RoomComponent } from './room/room.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BuildingComponent } from './building/building.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildingFormComponent } from './building-form/building-form.component';
import { AddBuildingComponent } from './add-building/add-building.component';
import { UpdateBuildingComponent } from './update-building/update-building.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    RoomComponent,
    AddBookingComponent,
    BuildingComponent,
    BuildingFormComponent,
    AddBuildingComponent,
    UpdateBuildingComponent,
    AddRoomComponent,
    RoomFormComponent,
    UpdateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
