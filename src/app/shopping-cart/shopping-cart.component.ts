
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
  }

  removeCartItem(cartItem: CartItem): void {
    this.productService.removeCartItem(cartItem);
    this.cartItems = this.productService.getCartItems();
  }

  clearCart(): void {
    this.productService.clearCart();
    this.cartItems = this.productService.getCartItems();
  }
  removeItemFromCart(cartItem: CartItem): void {
    this.productService.removeCartItem(cartItem);
    this.cartItems = this.productService.getCartItems();
  }

  decreaseQuantity(cartItem: CartItem): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    }
  }

  increaseQuantity(cartItem: CartItem): void {
    cartItem.quantity += 1;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
}
