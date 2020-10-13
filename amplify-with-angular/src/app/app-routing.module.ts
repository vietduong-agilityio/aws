import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { RoomComponent } from './room/room.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BuildingComponent } from './building/building.component';

const routes: Routes = [
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'room/:roomId/:buildingId',
    component: AddBookingComponent
  },
  {
    path: 'building',
    component: BuildingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
