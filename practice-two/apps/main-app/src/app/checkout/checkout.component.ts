// Import core modules
import { 
  Component, 
  OnInit,
  Inject
} from '@angular/core';

// Import Store to dispatch action
import { Store } from '@ngrx/store';

// Import Actions to get action and dispatch 
import { CheckoutActions } from './+state/actions/checkout.action';

// Import config file to get variables be defined
import { AppConfigService } from '@main-app/core/services/app-config.service';

// Import form elements
import {
  FormBuilder, 
  FormGroup, 
  Validators,
  FormControl
} from '@angular/forms';

// Import elements to navigate and get data from url
import { Router } from '@angular/router';

// Import checkout modal
import { Checkout } from './models/checkout.model';

// Import checkout service
import { CheckoutService } from './services/checkout.service';

// Import external services
import { OrdersService } from '@main-app/orders/services/orders.service';
import { UsersService } from '@main-app/users/services/users.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // Declare a form group to group all of checkout form 
  // elements
  checkoutForm: FormGroup;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private orderService: OrdersService,
    private usersService: UsersService,
    private checkoutService: CheckoutService,
    private store: Store<Checkout>,
    private checkoutAction: CheckoutActions,
    private router: Router
  ) { 

    // Create checkout form
    this.checkoutForm = fb.group({
      name: fb.group({
        first: ['', Validators.minLength(2)],
        last: ['', Validators.minLength(2)],
      }),
      company: ['', Validators.required],
      address: fb.group({
        country: ['', Validators.required],
        street: '',
        city: ['', Validators.required],
      }),
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: [this.usersService.getCurrentUser().email, [Validators.required, Validators.email]],
      dateRecieve: fb.group({
        start: '',
        end: ''
      })
    })
  }

  /**
   * Function to set from date for form control
   * @param  $event The date get from child component
   */
  setFromDate($event) {
    this.checkoutForm.get('dateRecieve').get('start').setValue($event);
  };

  /**
   * Function to set to date for form control
   * @param  $event THe date get from child component
   */
  setToDate($event) {
    this.checkoutForm.get('dateRecieve').get('end').setValue($event);
  };

  ngOnInit() {
  }

  /**
   * Function to add bill information to server
   */
  addBill() {

    // Create checkout object to add to server
    let checkout = new Checkout();
    checkout.id = `C${+new Date()}`;
    checkout.name = `${this.checkoutForm.get('name').get('first').value} ${this.checkoutForm.get('name').get('last').value}`;;
    checkout.address = `${this.checkoutForm.get('address').get('country').value}-${this.checkoutForm.get('address')
                                           .get('city').value}-${this.checkoutForm.get('address').get('street').value}`;
    checkout.company = this.checkoutForm.get('company').value;;
    checkout.orders = this.orderService.getOrder();;
    checkout.fromDate = this.checkoutForm.get('dateRecieve').get('start').value;;
    checkout.toDate = this.checkoutForm.get('dateRecieve').get('end').value;;
    checkout.phone = this.checkoutForm.get('phone').value;;
    checkout.email = this.checkoutForm.get('email').value;;

    // Dispatch action to add data to server
    this.store.dispatch(this.checkoutAction.addCheckout(checkout));

    // Reset cart in local storage
    this.orderService.resetOrder();

    // Navigate to list page
    this.router.navigate(['/book-list']);
  }

  get firstName() {
    return this.checkoutForm.get('name').get('first');
  }

  get lastName() {
    return this.checkoutForm.get('name').get('last');
  }

  get company() {
    return this.checkoutForm.get('company');
  }

  get country() {
    return this.checkoutForm.get('address').get('country');
  }

  get city() {
    return this.checkoutForm.get('address').get('city');
  }

  get phone() {
    return this.checkoutForm.get('phone');
  }

  get email() {
    return this.checkoutForm.get('email');
  }
}
