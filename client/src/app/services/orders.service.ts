import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  public getAllOrders() {
    return this.http.get('http://localhost:3000/order', {responseType: 'json'});
  }
}
