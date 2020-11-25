// Import core modules
import { 
  Component, 
  OnInit 
} from '@angular/core';

// Import external services
import { OrdersService } from '@main-app/orders/services/orders.service';
import { UsersService } from '@main-app/users/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Total items in cart
  totalItem: number;

  // Total prices in cart
  totalPrice: number;

  // Name of user
  userName: string;

  constructor(
    private orderService: OrdersService,
    private usersService: UsersService
  ) { 
    // Set init value for total of items and prices
    this.totalItem = this.orderService.itemTotal();
    this.totalPrice = this.orderService.priceTotal();
    this.userName = this.usersService.isExistUser();
  }

  ngOnInit() {
    this.orderService.totalItem$.subscribe(res => {
      this.totalItem = res;
    });

    this.orderService.totalPrice$.subscribe(res => {
      this.totalPrice = res;
    });
  }
}
