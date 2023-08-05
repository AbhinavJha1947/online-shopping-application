import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  getCartItems: any;

  addToCart(product: Product): void {
    // Check if the product is already in the cart
    const existingCartItem = this.cartItems.find((item) => item.product.id === product.id);

    if (existingCartItem) {
      // If the product is already in the cart, increase its quantity
      existingCartItem.quantity++;
    } else {
      // If the product is not in the cart, create a new cart item
      const newCartItem: CartItem = {
        product: product,
        quantity: 1
      };
      this.cartItems.push(newCartItem);
    }
  }

  // Rest of the CartService implementation...
}
