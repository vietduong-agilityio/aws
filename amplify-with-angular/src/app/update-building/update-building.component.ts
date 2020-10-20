import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/type/building';
import { APIService } from '../API.service';

@Component({
  selector: 'app-update-building',
  templateUrl: './update-building.component.html',
  styleUrls: ['./update-building.component.scss']
})
export class UpdateBuildingComponent implements OnInit {
  buildingId: string;

  isLoading: boolean = true;

  building: Building = {
    city: '',
    country: '',
    name: '',
    postalCode: '',
    streetAddress: ''
  };

  constructor(
    private activatedroute: ActivatedRoute,
    private api: APIService,
    private router: Router
  ) {
    this.buildingId = this.activatedroute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.buildingId) {
      this.api.GetBuilding(this.buildingId).then(data => {
        this.building = Object.assign(
          {},
          {
            city: data.city,
            country: data.country,
            name: data.name,
            postalCode: data.postalCode,
            streetAddress: data.streetAddress
          }
        );

        this.isLoading = false;
      })
    }
  }

  updateBuilding($event) {
    const updateObj = Object.assign(
      $event,
      {
        buildingId: this.buildingId
      }
    )

    this.api.UpdateBuilding(updateObj).then(data => {
      this.isLoading = false;

      this.router.navigate(['/building']);
    })
  }

  cancelUpdateBuilding() {
    this.router.navigate(['/building']);
  }

}
