import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component'; // Import the FormsModule
import { CartService } from './cart.service'; // Make sure CartService is imported
import { ProductService } from './product.service';
import { ProductItemComponent } from './product-item/product-item.component'; // Make sure ProductService is imported
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    FilterPipe,
    ShoppingCartComponent,
    CheckoutPageComponent,
    OrderConfirmationComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
