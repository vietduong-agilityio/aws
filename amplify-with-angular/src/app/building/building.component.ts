import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Building } from '../../type/building'

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  buildingList: Building[];

  constructor(
    private api: APIService
  ) { }

  ngOnInit() {
    this.api.ListBuildings().then(data => {
      this.buildingList = data.items || [];
    })

    this.api.OnCreateBuildingListener.subscribe((data: any) => {
      if (data && data.value && data.value.data && data.value.data.onCreateBuilding) {
        this.buildingList.push(data.value.data.onCreateBuilding)
      }
    })
  }

}
