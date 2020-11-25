// Import core modules
import { 
  Component, 
  OnInit 
} from "@angular/core";

// Import elements to navigate and get data from url
import { Router } from "@angular/router";

// Import internal service
import { OrdersService } from "./services/orders.service";

@Component({
  selector: "orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  // Total price
  totalPrice: number = 0;

  constructor(
    private route: Router, 
    private orderServices: OrdersService
  ) {
    // Set init value for total price
    this.totalPrice = this.orderServices.priceTotal();
  }

  ngOnInit() {
    // Price total of all of orders
    this.orderServices.totalPrice$.subscribe(res => {
      this.totalPrice = res;
    });
  }

  /**
   * Handle when click submit
   * Redirect to checkout page to payment
   */
  onSubmit() {
    this.route.navigate(["/checkout"]);
  }
}
