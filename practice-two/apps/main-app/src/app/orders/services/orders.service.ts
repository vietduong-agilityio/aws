import { Observable } from 'rxjs/Observable';
// Import core module
import { Injectable } from '@angular/core';

// Import external elements
import { LocalStorageService } from '@main-app/core/services/local-storage.service';
import { Orders } from './../model/orders.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OrdersService {
  // List orders get from storage
  orders: Orders[];

  // Total of items and prices have to auto update
  totalItem$: Subject<number> = new Subject<number>();
  totalPrice$: Subject<number> = new Subject<number>();

  constructor(
    private storage: LocalStorageService
  ) { }

  /**
   * Function to add an order 
   * If order existed, add quantity
   * Else, create new order
   * @param order 
   */
  addToCart(order: Orders) {
    this.orders = this.getOrder();

    // Check order existed or not
    if (this.isExistOrder(this.orders, order)) {
      this.orders = this.orders.map(item => {
        let temp = item.quantity + order.quantity;
        return item.book.id === order.book.id 
          ? { ...item, quantity: temp, total: item.book.price * temp } 
          : item;
      });
    } else {

      // If order not exist yet, create new order
      let orderTemp: Orders = {
        id: order.id,
        book: order.book,
        quantity: order.quantity,
        total: order.total
      };

      // Push new order to local storage
      this.orders.push(orderTemp);
    }

    // Set new local storage
    this.setOrder(this.orders);

    // Update sum of items quantity and items price
    this.itemTotal();
    this.priceTotal();
  }

  /**
   * Function to check whether order for item existed or not
   * @param orders - List orders in local storage
   * @param order - New order to check existed or not
   */
  isExistOrder(orders, order) {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].book.id === order.book.id) {
        return true;
      }
    }

    return false;
  }

  /**
   * Get list orders from local storage
   */
  getOrder() {
    return this.storage.getStorage('orders');
  }

  /**
   * Set list order to local storage
   * @param orders - List orders
   */
  setOrder(orders) {
    this.storage.setStorage('orders', orders);
  }

  resetOrder() {
    this.storage.setStorage('orders', []);
  }

  /**
   * Function to get total of items in cart
   */
  itemTotal() {
    let total = 0;

    // Get sum of item quantity
    this.getOrder().forEach(item => {
      total = total + item.quantity;
    });

    // Send data to observable
    this.totalItem$.next(total);

    return total;
  }

  /**
   * Function to get total of prices in cart
   */
  priceTotal() {
    let total = 0;

    // Get sum of item price
    this.getOrder().forEach(item => {
      total = total + item.total;
    });

    // Send data to observable
    this.totalPrice$.next(total);

    return total;
  }

  /**
   * Function to delete an item in local storage by id
   * @param id Id of item delete
   * @param orders List order contain item have to delete
   */
  deleteOrder(id, orders) {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].id === id) {
        orders.splice(i, 1);
      }
    };

    this.setOrder(orders);

    // Update sum of items quantity and items price
    this.itemTotal();
    this.priceTotal();
  }
}
