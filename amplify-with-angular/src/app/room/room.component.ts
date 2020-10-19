import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Room } from '../../type/room';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  roomList: Room[] = [];

  displayedColumns: string[] = ['roomId', 'buildingId', 'name', 'action'];

  constructor(
    private api: APIService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.api.ListRooms().then(data => {
      this.roomList = data.items || [];
    })
  }

  linkToAddRoom() {
    this.router.navigate(['/add-room']);
  }

  openDialog(buildingId, roomId) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Do you want to delete this Room? This will delete the related Bookings!'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.api.DeleteRoomBooking({
          buildingId: buildingId,
          roomId: roomId
        }).then(data => {
          this.roomList = this.roomList.filter(item => item.roomId !== roomId);
        });
      }
    });
  }

}
