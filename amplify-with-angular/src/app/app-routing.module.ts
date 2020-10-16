import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { RoomComponent } from './room/room.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BuildingComponent } from './building/building.component';
import { AddBuildingComponent } from './add-building/add-building.component';
import { UpdateBuildingComponent } from './update-building/update-building.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

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
  },
  {
    path: 'add-building',
    component: AddBuildingComponent
  },
  {
    path: 'update-building/:id',
    component: UpdateBuildingComponent
  },
  {
    path: 'add-room',
    component: AddRoomComponent
  },
  {
    path: 'update-room/:buildingId/:roomId',
    component: UpdateRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
