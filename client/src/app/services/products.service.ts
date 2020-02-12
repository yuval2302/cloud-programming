import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProductsDataService {
  public constructor(private http: HttpClient) {
  }

  public all(): Observable<any> {
    return this.http.get('http://localhost:3000/product', {responseType: 'json'});
  }

  public delete(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type':  'application/json',
      })
    };
    return this.http.delete(`http://localhost:3000/product/${id}`, httpOptions);
  }

  public save(product: Product): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type':  'application/json',
      })
    };

    return this.http.post('http://localhost:3000/product', product, {responseType: 'json'});
  }
}
