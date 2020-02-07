import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CheckoutComponent} from './components/checkout/checkout.component';
import {OrderConfirmationComponent} from './components/order-confirmation/order-confirmation.component';
import {StoreFrontComponent} from './components/store-front/store-front.component';
import {PopulatedCartRouteGuard} from './route-gaurds/populated-cart.route-gaurd';
import {ManagerComponent} from './components/manager/manager.component';

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot([
      {
        canActivate: [PopulatedCartRouteGuard],
        component: CheckoutComponent,
        path: 'checkout'
      },
      {
        canActivate: [PopulatedCartRouteGuard],
        component: OrderConfirmationComponent,
        path: 'confirmed'
      },
      {
        component: ManagerComponent,
        path: 'manager'
      },
      {
        component: StoreFrontComponent,
        path: '**'
      }])
  ]
})
export class AppRoutingModule {
}
