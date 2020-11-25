// Import core modules
import { 
  Component, 
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";

// Import ng-bootstrap modules
import { 
  NgbDateStruct,
  NgbCalendar 
} from "@ng-bootstrap/ng-bootstrap";

// Check from date equal to date
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one &&
  two &&
  two.year === one.year &&
  two.month === one.month &&
  two.day === one.day;

// Check from date before to date
const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day ? false : one.day < two.day
        : one.month < two.month
      : one.year < two.year;

// Check from date after date
const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day ? false : one.day > two.day
        : one.month > two.month
      : one.year > two.year;

@Component({
  selector: "date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.css"]
})
export class DatePickerComponent implements OnInit {
  @Output() setFromDate = new EventEmitter<any>();
  @Output() setToDate = new EventEmitter<any>();

  hoveredDate: NgbDateStruct;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), "d", 3);
  }

  ngOnInit() {}

  onDateSelection(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    };

    this.setFromDate.emit(this.fromDate);
    this.setToDate.emit(this.toDate);
  }

  isHovered = date =>
    this.fromDate &&
    !this.toDate &&
    this.hoveredDate &&
    after(date, this.fromDate) &&
    before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);
}
