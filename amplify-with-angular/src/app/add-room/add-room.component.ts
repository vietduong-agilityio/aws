import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Building } from 'src/type/building';
import { Room } from 'src/type/room';
import { APIService } from '../API.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  room: Room = {
    buildingId: '',
    name: ''
  }

  isLoading: boolean = false;

  buildingList: Building[] = [];

  constructor(
    private api: APIService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.ListBuildings().then((data: any) => {
      this.buildingList = this.buildingList.concat(data.items);
    })
  }

  addRoom($event) {
    this.api.CreateRoom($event).then(data => {
      this.isLoading = false;

      this.router.navigate(['/room']);
    })
  }

  cancelAddRoom() {
    this.router.navigate(['/room']);
  }

}
