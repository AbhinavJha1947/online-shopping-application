
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { CartItem } from './cart-item.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductsByCategory(category: string) {
    throw new Error('Method not implemented.');
  }
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      image: "p1.jpg"      ,
      description: 'This is the description of Product 1.'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 12,
      image: 'p2.jpg',
      description: 'This is the description of Product 1.'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 15,
      image: 'p3.jpg',
      description: 'This is the description of Product 1.'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 8,
      image: 'p4.jpg',
      description: 'This is the description of Product 1.'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 20,
      image: 'p5.jpg',
      description: 'This is the description of Product 1.'
    },

  ];
   
  private cartItems: CartItem[] = [];
  getAllProducts: any;

  addToCart(product: Product, quantity: number = 1): void {
    const existingCartItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
  }
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  removeCartItem(cartItem: CartItem): void {
    this.cartItems = this.cartItems.filter(item => item !== cartItem);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(productId: number): Observable<Product> {
    const product = this.products.find((p) => p.id === productId);
    return of(product || this.createEmptyProduct());
  }
  private createEmptyProduct(): Product {
    return {
      id: 0,
      name: 'Product not found',
      price: 0,
      description: 'This product does not exist.',
      image: 'default-image.jpg'
    };
  }

}