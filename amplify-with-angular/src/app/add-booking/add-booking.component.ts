import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Auth } from 'aws-amplify';

import { APIService } from '../API.service';
import { Booking } from '../../type/booking';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {
  roomId: string;
  buildingId: string;
  userId: string;

  bookingForm: FormGroup;

  informMsg: string = '';

  isSubmitted: boolean = false;

  constructor(
    private activatedroute: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    Auth.currentUserInfo().then(data => {
      this.userId = data.username || '';
    });

    this.buildingId = this.activatedroute.snapshot.paramMap.get('buildingId');
    this.roomId = this.activatedroute.snapshot.paramMap.get('roomId');

    if (this.buildingId && this.roomId) {
      this.api.GetRoom(this.buildingId, this.roomId).then(data => {

        this.bookingForm = this.fb.group({
          building: [data.building.name, Validators.required],
          room: [data.name, Validators.required],
          startTime: ['', Validators.required],
          endTime: ['', Validators.required]
        })
      })
    }
  }

  addBooking() {
    this.isSubmitted = true;
    if (this.bookingForm.valid && this.userId) {
      const startTimeMili = new Date(this.bookingForm.value.startTime).getTime();
      const endTimeMili = new Date(this.bookingForm.value.endTime).getTime();

      if (startTimeMili >= endTimeMili) {
        this.informMsg = 'Start Time need smaller then End Time!';
      } else {
        this.informMsg = '';

        const newBooking: Booking = {
          buildingId: this.buildingId,
          roomId: this.roomId,
          userId: this.userId,
          startTime: startTimeMili.toString(),
          endTime: endTimeMili.toString()
        };

        this.api.CreateBookingRoom(newBooking).then(data => {
          this.router.navigate(['/booking']);
        },
        err => {
          this.informMsg = `Error! ${err.errors[0].message}`;
        });
      }
    }
  }
}
