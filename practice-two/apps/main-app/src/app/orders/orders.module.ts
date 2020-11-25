// Import core and common modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import material modules
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

// Import form modules
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

// Import internal elements
import { OrdersComponent } from './orders.component';
import { OrdersService } from '@main-app/orders/services/orders.service';
import { OrderTableComponent } from './components/order-table/order-table.component';

const Modules: any = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CdkTableModule,
  MatTableModule
];

const Components: any = [
  OrdersComponent,
  OrderTableComponent
];

const Providers: any = [
  OrdersService
]

const Exports: any = [
  OrderTableComponent
]

@NgModule({
  imports: [
    ...Modules
  ],
  declarations: [
    ...Components,
  ],
  providers: [
    ...Providers
  ],
  exports: [
    ...Exports
  ]
})
export class OrdersModule {}
