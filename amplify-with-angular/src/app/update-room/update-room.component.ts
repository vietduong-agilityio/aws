import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/type/building';
import { Room } from 'src/type/room';
import { APIService } from '../API.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {
  roomId: string;
  buildingId: string;

  room: Room = {
    buildingId: '',
    name: ''
  }

  isLoading: boolean = true;

  buildingList: Building[] = [];

  constructor(
    private api: APIService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {
    this.roomId = this.activatedroute.snapshot.paramMap.get('roomId');
    this.buildingId = this.activatedroute.snapshot.paramMap.get('buildingId');
  }

  ngOnInit(): void {
    this.api.ListBuildings().then((data: any) => {
      this.buildingList = this.buildingList.concat(data.items);
    })

    if (this.roomId) {
      this.api.GetRoom(this.buildingId, this.roomId).then(data => {
        this.room = Object.assign(
          {},
          {
            buildingId: data.buildingId,
            name: data.name
          }
        );

        this.isLoading = false;
      })
    }
  }

  updateRoom($event) {
    const updateObj = Object.assign(
      $event,
      {
        roomId: this.roomId
      }
    )

    this.api.UpdateRoom(updateObj).then(data => {
      this.isLoading = false;

      this.router.navigate(['/room']);
    })
  }

  cancelUpdateRoom() {
    this.router.navigate(['/room']);
  }

}
