import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProductsDataService {
  public constructor(private http: HttpClient) {
  }

  public all(): Observable<any> {
    return this.http.get('master-lb-1210004499.us-east-1.elb.amazonaws.com:3000/product', {responseType: 'json'});
  }

  public delete(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type':  'application/json',
        responseType: 'json'
      }),
    };
    return this.http.post('master-lb-1210004499.us-east-1.elb.amazonaws.com:3000/product/delete', {id}, {responseType: 'json'});
  }

  public save(product: Product): Observable<any> {
    return this.http.post('master-lb-1210004499.us-east-1.elb.amazonaws.com:3000/product', product, {responseType: 'json'});
  }
}
