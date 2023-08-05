import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './/auth.guard';
// import { CanActivateChildGuard } from './guards/can-activate-child.guard';
// import { CartNotEmptyGuard } from './guards/cart-not-empty.guard';
// import { LoginComponent } from './login/login.component';
// import { CartComponent } from './cart/cart.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { OrderHistoryComponent } from './order-history/order-history.component';



const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListingComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListingComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  //{ path: 'cart', component: CartComponent },
  // Protected routes (require authentication)
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
