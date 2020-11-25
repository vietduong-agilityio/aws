// Import core and common module
import { NgModule } from '@angular/core';

// Import router module
import { RouterModule } from '@angular/router';

// Import internal components
import { OrdersComponent } from './orders.component';

// Import external components
import { PrimaryLayoutComponent } from '@main-app/shared/components/primary-layout/primary-layout.component';

const Components: any = [
  OrdersComponent,
  PrimaryLayoutComponent
];

export const ROUTES: any = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: 'cart',
        component: OrdersComponent
      }
    ]
  }
];

const Modules: any = [
  RouterModule.forChild(ROUTES)
];

@NgModule({
  imports: [
    ...Modules
  ],
  declarations: [
    ...Components
  ]
})
export class OrdersRoutingModule { }
