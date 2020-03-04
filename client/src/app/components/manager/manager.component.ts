import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Observable} from 'rxjs';;
import {Product} from '../../models/product.model';
import {ProductsDataService} from '../../services/products.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html'
})
export class ManagerComponent implements OnInit {
  public isAddProductMode: boolean = false;
  public products: Observable<Product[]>;
  public newProduct: Product = new Product();

  public constructor(private productsService: ProductsDataService, private shoppingCartService: ShoppingCartService) {
  }

  public ngOnInit(): void {
    this.products = this.productsService.all();
    this.products.subscribe(x => {
      console.log(x);
    })
  }

  public onDelete(id: string) {
    this.productsService.delete(id).subscribe(value => {
      this.products = this.productsService.all();
    });
  }

  public onSave() {
    this.productsService.save(this.newProduct).subscribe(value => {
      this.products = this.productsService.all();
      this.changeView(false);
    });
  }

  public changeView(shouldAddProduct) {
    this.isAddProductMode = shouldAddProduct;
  }
}
