import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService, 
    private router: Router // Inject the Router service
    ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  addToCart(product: Product): void {
    this.productService.addToCart(product);
  }
  showProductDetails(productId: number): void {
    // Navigate to the product details page using Angular Router
    // Assuming the route for the product details is named 'product/:id'
    // Make sure you have defined the appropriate route in the app-routing.module.ts
    // The product ID is passed as a parameter to the route
    // For example, if the product ID is 1, the URL will be http://localhost:4200/product/1
    // Replace 'product/:id' with the actual route path to your product details page
    this.router.navigate(['/product', productId]);
  }

}
