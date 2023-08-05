import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const productId = +params['id'];
      this.getProductDetails(productId);
    });
  }

  getProductDetails(productId: number) {
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product!;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
