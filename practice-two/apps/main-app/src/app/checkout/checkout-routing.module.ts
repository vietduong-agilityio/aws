// Import core modules
import { NgModule } from '@angular/core';

// Import router module
import { RouterModule } from '@angular/router';

// Import internal components
import { CheckoutComponent } from './checkout.component';

// Import external components
import { PrimaryLayoutComponent } from '@main-app/shared/components/primary-layout/primary-layout.component';

const Components: any = [
  CheckoutComponent,
  PrimaryLayoutComponent
];

export const ROUTES: any = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: 'checkout',
        component: CheckoutComponent
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
export class CheckoutRoutingModule { }
