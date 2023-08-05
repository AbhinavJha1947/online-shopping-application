// checkout.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  shippingDetails = { name: '', address: '', city: '', /* Add other shipping details properties here */ };
  checkoutForm: FormGroup;

  constructor(
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
   }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.checkoutForm.valid) {
      // Perform the checkout process here, e.g., place the order
      console.log('Form submitted successfully!', this.checkoutForm.value);
    } else {
      // Handle form validation errors
      console.log('Form has errors. Please check the form fields.');
    }
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
