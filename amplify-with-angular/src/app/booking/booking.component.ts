import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Booking } from '../../type/booking';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingList: Booking[] = [];

  displayedColumns: string[] = ['bookingId', 'buildingId', 'roomId', 'startTime', 'endTime', 'userId', 'action'];

  constructor(
    private api: APIService,
    private cd: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.api.ListBookings().then(data => {
      this.bookingList = data.items || [];
    });

    this.api.OnCreateBookingRoomListener.subscribe((data: any) => {
      if (data && data.value && data.value.data && data.value.data.onCreateBookingRoom) {
        this.bookingList.push(data.value.data.onCreateBookingRoom);
        this.bookingList = [...this.bookingList];
        this.cd.detectChanges();
      }
    })
  }

  openDialog(bookingId, userId) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Do you want to delete this Booking? You can not reverse this action!'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.api.DeleteBooking({
          userId: userId,
          bookingId: bookingId
        }).then(data => {
          this.bookingList = this.bookingList.filter(item => item.bookingId !== bookingId);
        })
      }
    });
  }

}
