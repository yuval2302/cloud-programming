import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {OrderConfirmationComponent} from './components/order-confirmation/order-confirmation.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {StoreFrontComponent} from './components/store-front/store-front.component';
import {PopulatedCartRouteGuard} from './route-gaurds/populated-cart.route-gaurd';
import {ProductsDataService} from './services/products.service';
import {ShoppingCartService} from './services/shopping-cart.service';
import {LocalStorageServie, StorageService} from './services/storage.service';
import {ManagerComponent} from './components/manager/manager.component';
import {HttpClientModule} from '@angular/common/http';
import {OrdersComponent} from './components/orders/orders.component';
import {OrdersService} from './services/orders.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    StoreFrontComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    ManagerComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductsDataService,
    PopulatedCartRouteGuard,
    LocalStorageServie,
    ShoppingCartService,
    OrdersService,
    {provide: StorageService, useClass: LocalStorageServie},

  ]
})
export class AppModule {
}
