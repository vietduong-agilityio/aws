import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Booking } from '../../type/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingList: Booking[] = [];

  constructor(
    private api: APIService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.api.ListBookings().then(data => {
      this.bookingList = data.items || [];
    });

    this.api.OnCreateBookingRoomListener.subscribe((data: any) => {
      if (data && data.value && data.value.data && data.value.data.onCreateBookingRoom) {
        this.bookingList.push(data.value.data.onCreateBookingRoom);
        this.cd.markForCheck()
      }
    })
  }

}
