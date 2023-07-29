// checkout.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  shippingDetails = { name: '', address: '', city: '', /* Add other shipping details properties here */ };

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  placeOrder(): void {
    // You can access the cart items from the ProductService

    // Do further processing (e.g., sending the order to the server, calculating the total price, etc.)

    // Clear the cart after placing the order
    this.productService.clearCart();

    // Navigate to the Order Confirmation Page and pass the shipping details as a query parameter
    this.router.navigate(['/order-confirmation'], { queryParams: this.shippingDetails });
  }
}
