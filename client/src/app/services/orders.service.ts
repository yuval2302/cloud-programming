import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OrdersService {
  public orders: any = [];
  constructor(private http: HttpClient) {
  }

  public getAllOrders() {
    return this.http.get('http://localhost:3000/order', {responseType: 'json'})
  }

  public newOrder(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type':  'application/json',
      })
    };
    this.http.post('http://localhost:3000/order', {responseType: 'json'}, httpOptions).subscribe(orders => {
      this.orders = orders;
    });
  }
}
