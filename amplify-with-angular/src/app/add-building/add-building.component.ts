import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Building } from 'src/type/building';
import { APIService } from '../API.service';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent implements OnInit {
  building: Building = {
    city: '',
    country: '',
    name: '',
    postalCode: '',
    streetAddress: ''
  }

  constructor(
    private api: APIService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addBuilding($event) {
    this.api.CreateBuilding($event).then(data => {
      this.router.navigate(['/building']);
    })
  }

}
