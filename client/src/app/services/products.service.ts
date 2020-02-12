import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductsDataService {
  public constructor(private http: HttpClient) {
  }

  public all(): Observable<any> {
    return this.http.get('http://localhost:3000/product', {responseType: 'json'});
  }

}
