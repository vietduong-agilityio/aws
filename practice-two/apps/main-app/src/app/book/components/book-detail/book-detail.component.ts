// Import core modules
import { 
  Component, 
  OnInit, 
  ChangeDetectorRef 
} from '@angular/core';

// Import Store to dispatch action
import { Store } from '@ngrx/store';

// Import elements to navigate and get data from url
import { 
  ActivatedRoute, 
  Router 
} from '@angular/router';

// Import Book Service to call to service handle data
import { BookService } from '../../services/book.service';

// Import Book object to create instance
import { Book } from '../../models/book.model';

// Import external elements
import { Orders } from '@main-app/orders/model/orders.model';
import { LocalStorageService } from '@main-app/core/services/local-storage.service';
import { AppConfigService } from '@main-app/core/services/app-config.service';
import { OrdersService } from '@main-app/orders/services/orders.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  // Item selected from the list
  book: Book;

  // The quantity of book want to order
  quantity: number = 1;

  // Order item to add to cart
  orderItem: Orders = new Orders();

  // List orders from local storage
  listsOrder: Orders[];

  // Message to inform add to cart
  msg: string = '';

  listEx: string[];

  constructor(
    private routeNavigate: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private orderService: OrdersService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // Get book id from the url
    const id = this.route.snapshot.paramMap.get('id');

    /**
     * Get book by id and set to book object to display on template
     */
    this.bookService.getBook(id).subscribe(res => {
      this.book = res[0];
      this.cd.markForCheck();
    });
  }

  /**
   * Handle when click add
   * Add item selected to order list
   * Then add order list to cart
   */
  addToCart() {
    // Create order object to add into local storage
    this.orderItem.id = 'O' + +new Date();
    this.orderItem.book = this.book;
    this.orderItem.quantity = this.quantity;
    this.orderItem.total = this.book.price * this.quantity;

    this.orderService.addToCart(this.orderItem);

    // Set message to inform add success
    this.msg = AppConfigService.defaultMessage.addSuccess;
  }
}
