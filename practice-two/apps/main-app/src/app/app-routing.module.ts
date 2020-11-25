// Import core module
import { NgModule } from '@angular/core';

// Import router module
import { RouterModule } from '@angular/router';

// Import internal routing
import { ROUTES as bookRouting } from './book/book-routing.module';
import { ROUTES as orderRouting } from './orders/orders-routing.module'; 
import { ROUTES as checkoutRouting } from './checkout/checkout-routing.module';
import { ROUTES as userRouting } from './users/users-routing.module';

const ROUTES: any = [
  {
    path: '',
    children: [
      ...bookRouting
    ]
  },
  {
    path: '',
    children: [
      ...orderRouting
    ]
  },
  {
    path: '',
    children: [
      ...checkoutRouting
    ]
  },
  {
    path: '',
    children: [
      ...userRouting
    ]
  }
];

const RouterModules: any = [
  RouterModule.forRoot(ROUTES)
];

const RouterExports: any = [
  RouterModule
];

@NgModule({
  imports: [
    ...RouterModules
  ],
  exports: [
    ...RouterExports
  ]
})
export class AppRoutingModule {}
