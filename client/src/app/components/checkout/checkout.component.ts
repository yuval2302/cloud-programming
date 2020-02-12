import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartItem} from '../../models/cart-item.model';
import {Product} from '../../models/product.model';
import {ShoppingCart} from '../../models/shopping-cart.model';
import {ProductsDataService} from '../../services/products.service';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Observable, Subscription} from 'rxjs';
import {OrdersService} from "../../services/orders.service";

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-checkout',
  styleUrls: ['./checkout.component.scss'],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;

  private products: Product[];
  private cartSubscription: Subscription;

  public constructor(private productsService: ProductsDataService,
                     private shoppingCartService: ShoppingCartService,
                     private orderService: OrdersService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnInit(): void {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.all().subscribe((products) => {
        this.products = products;
        this.cartItems = cart.items
          .map((item) => {
            const product = this.products.find((p) => p.id === item.productId);
            return {
              ...item,
              product,
              totalCost: product.price * item.quantity
            };
          });
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  public saveOrder() {
    this.orderService.newOrder();
  }
}
