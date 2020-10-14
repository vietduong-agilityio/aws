import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Room } from '../../type/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  roomList: Room[] = [];

  displayedColumns: string[] = ['roomId', 'buildingId', 'name', 'action'];

  constructor(
    private api: APIService
  ) { }

  ngOnInit(): void {
    this.api.ListRooms().then(data => {
      this.roomList = data.items || [];
    })
  }

}
