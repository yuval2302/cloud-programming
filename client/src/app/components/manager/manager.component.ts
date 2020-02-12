import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Observable} from 'rxjs';
import {Product} from '../../models/product.model';
import {ProductsDataService} from '../../services/products.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html'
})
export class ManagerComponent implements OnInit {
  public isAddProductMode: boolean = false;
  public products: Observable<any>;

  public constructor(private productsService: ProductsDataService, private shoppingCartService: ShoppingCartService) {
  }

  public ngOnInit(): void {
    this.products = this.productsService.all();
  }

  public changeView(shouldAddProduct) {
    this.isAddProductMode = shouldAddProduct;
  }
}
