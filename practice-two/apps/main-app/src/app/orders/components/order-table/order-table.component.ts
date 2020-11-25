// Import core modules
import { 
  Component,
   OnInit 
} from '@angular/core';

// Import elements from material to work with table, pagination and sort data
import { MatTableDataSource } from '@angular/material';

// Import order model
import { Orders } from '../../model/orders.model';

// Import internal service
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  // Define template for Table Material
  displayedColumns = ['item', 'name', 'price', 'quantity', 'remove', 'total'];
  dataSource = new MatTableDataSource<Orders>();

  constructor(
    private orderServices: OrdersService
  ) { }

  ngOnInit() {
    // Set data for table to display on template
    this.dataSource.data = this.orderServices.getOrder();
  }

  /**
   * Remove an order on template and in local storage
   * @param id Id of order have to delete
   */
  remove(id) {
    this.orderServices.deleteOrder(id, this.orderServices.getOrder());

    // Set data for table
    this.dataSource.data = this.orderServices.getOrder();
  }

}
