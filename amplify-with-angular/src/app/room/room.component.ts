import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Room } from '../../type/room';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.ListRooms().then(data => {
      this.roomList = data.items || [];
    })
  }

  linkToAddRoom() {
    this.router.navigate(['/add-room']);
  }

}
