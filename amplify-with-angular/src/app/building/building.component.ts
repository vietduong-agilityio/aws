import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { APIService } from '../API.service';
import { Building } from '../../type/building'
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  buildingList: Building[];

  displayedColumns: string[] = ['buildingId', 'city', 'country', 'name', 'postalCode', 'streetAddress', 'action'];

  constructor(
    private api: APIService,
    private router: Router,
    public dialog: MatDialog
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

  linkToAddBuilding() {
    this.router.navigate(['/add-building']);
  }

  openDialog(buildingId) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Do you want to delete this Building? This will delete the Rooms in this Building and the Bookings related!'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.api.DeleteBuildingRoom({
          buildingId: buildingId
        }).then(data => {
          this.buildingList = this.buildingList.filter(item => item.buildingId !== buildingId)
        });
      }
    });
  }
}
