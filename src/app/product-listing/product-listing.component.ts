import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'; // Import the Router service
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  filterForm: FormGroup;
  selectedProduct: Product | undefined; // Declare the selectedProduct variable

  
    constructor(private productService: ProductService, private formBuilder: FormBuilder,     private cartService: CartService) {
      this.filterForm = this.formBuilder.group({
        category: ['all'], // Default to 'all' category
        sort: ['priceAscending'] // Default to sort by price in ascending order
      });
    }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
    });

    // Subscribe to form value changes to apply filtering and sorting
    this.filterForm.valueChanges.subscribe((formValues) => {
      this.filterProducts(formValues.category);
      this.sortProducts(formValues.sort);
    });
  }
  filterProducts(category: string) {
    if (category === 'all') {
      // Return the observable here instead of subscribing inside the method
      return this.productService.getAllProducts();
    } else {
      // Return the observable here instead of subscribing inside the method
      return this.productService.getProductsByCategory(category);
    }
  }

  sortProducts(sortOption: string) {
    // Sort products based on the selected option
    switch (sortOption) {
      case 'priceAscending':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'priceDescending':
        this.products.sort((a, b) => b.price - a.price);
        break;
      default:
        // Default to no sorting
        break;
    }
  }
}

  
  
