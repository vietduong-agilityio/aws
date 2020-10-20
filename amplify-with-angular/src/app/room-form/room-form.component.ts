import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Building } from 'src/type/building';
import { Room } from 'src/type/room';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit, OnChanges {
  @Input() buildingList: Building[] = [];
  @Input() room: Room;
  @Input() isEditMode: boolean = false;
  @Input() isLoading: boolean = false;
  @Output() newRoom = new EventEmitter<Room>();
  @Output() cancel = new EventEmitter();

  roomForm: FormGroup;

  disableSelectBuilding: boolean = false;

  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.roomForm = this.fb.group({
      buildingId: [this.room.buildingId, Validators.required],
      name: [this.room.name, Validators.required]
    })
  }

  emitRoom() {
    this.isSubmitted = true;
    if (this.roomForm.valid) {
      this.isLoading = true;

      const roomObj: Room = {
        buildingId: this.roomForm.value.buildingId,
        name: this.roomForm.value.name
      };

      this.newRoom.emit(roomObj);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

}
