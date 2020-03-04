import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsDataService} from '../../services/products.service';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Observable, Observer} from 'rxjs';
import {OrdersService} from "../../services/orders.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-store-front',
  styleUrls: ['./store-front.component.scss'],
  templateUrl: './store-front.component.html'
})
export class StoreFrontComponent implements OnInit {
  public products: Observable<Product[]>;

  public constructor(private productsService: ProductsDataService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
  }

  public productInCart(product: Product): any {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
        .get()
        .subscribe((cart) => {
          obs.next(cart.items.some((i) => i.productId === product.id));
          obs.complete();
        });
      sub.unsubscribe();
    });
  }

  public ngOnInit(): void {
    this.products = this.productsService.all();
  }
}
