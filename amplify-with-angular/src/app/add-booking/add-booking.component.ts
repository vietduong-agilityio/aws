import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { APIService } from '../API.service';
import { Booking } from '../../type/booking';
import { Room } from '../../type/room';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {
  roomDetail: Room = {
    buildingId: '',
    roomId: '',
    name: ''
  };
  roomId: string;
  buildingId: string;

  bookingForm: FormGroup;

  informMsg: string = '';

  constructor(
    private activatedroute: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildingId = this.activatedroute.snapshot.paramMap.get('buildingId');
    this.roomId = this.activatedroute.snapshot.paramMap.get('roomId');

    if (this.buildingId && this.roomId) {
      this.api.GetRoom(this.buildingId, this.roomId).then(data => {
        this.roomDetail.buildingId = data.buildingId;
        this.roomDetail.roomId = data.roomId;
        this.roomDetail.name = data.name;

        this.bookingForm = this.fb.group({
          buildingId: [data.buildingId, Validators.required],
          roomId: [data.roomId, Validators.required],
          userId: ['', Validators.required],
          startTime: ['', Validators.required],
          endTime: ['', Validators.required]
        })
      })
    }
  }

  addBooking() {
    if (this.bookingForm.valid) {
      const newBooking: Booking = {
        buildingId: this.bookingForm.value.buildingId,
        roomId: this.bookingForm.value.roomId,
        userId: this.bookingForm.value.userId,
        startTime: this.bookingForm.value.startTime,
        endTime: this.bookingForm.value.endTime
      };

      this.api.CreateBookingRoom(newBooking).then(data => {
        this.informMsg = 'Added!'
      },
      err => {
        this.informMsg = `Error! ${err.errors[0].message}`;
      });
    }
  }
}
