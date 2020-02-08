import {Injectable} from '@angular/core';

@Injectable()
export class OrdersService {

  constructor() {
  }

  public getAllOrders() {
    return [
      {
        id: 1,
        date: '08.02.2020'
      },
      {
        id: 2,
        date: '05.02.2020'
      },
      {
        id: 3,
        date: '07.02.2020'
      }
    ];
  }
}
