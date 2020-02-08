import {Injectable} from '@angular/core';

@Injectable()
export class OrdersService {

  constructor() {
  }

  public getAllOrders() {
    return [
      {
        orderId: 1,
        orderDate: '08.02.2020'
      },
      {
        orderId: 2,
        orderDate: '05.02.2020'
      },
      {
        orderId: 3,
        orderDate: '07.02.2020'
      }
    ];
  }
}
