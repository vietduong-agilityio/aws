import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Building } from 'src/type/building';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.scss']
})
export class BuildingFormComponent implements OnInit, OnChanges {
  @Input() building: Building;
  @Output() newBuilding = new EventEmitter<Building>();

  buildingForm: FormGroup;

  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.buildingForm = this.fb.group({
      city: [this.building.city, Validators.required],
      country: [this.building.country, Validators.required],
      name: [this.building.name, Validators.required],
      postalCode: [this.building.postalCode, Validators.required],
      streetAddress: [this.building.streetAddress, Validators.required],
    })
  }

  emitBuilding() {
    this.isSubmitted = true;
    if (this.buildingForm.valid) {
      const builingObj: Building = {
        city: this.buildingForm.value.city,
        country: this.buildingForm.value.country,
        name: this.buildingForm.value.name,
        postalCode: this.buildingForm.value.postalCode,
        streetAddress: this.buildingForm.value.streetAddress
      };

      this.newBuilding.emit(builingObj);
    }
  }

}
