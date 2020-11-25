// Import core modules
import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'book-img',
  templateUrl: './book-img.component.html',
  styleUrls: ['./book-img.component.css']
})
export class BookImgComponent implements OnInit {
  @Input() bookImg: string;
  @Input() classImg: string;

  constructor() { }

  ngOnInit() {
  }

}
