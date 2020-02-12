import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.ordersService.getAllOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

}
