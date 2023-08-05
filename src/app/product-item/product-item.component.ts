import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product; // Input property to receive the product data
  @Output() productClicked: EventEmitter<Product> = new EventEmitter<Product>(); // Output property to emit the selected product

  onProductClick() {
    // Emit the selected product to the parent (Product Listing) component
    this.productClicked.emit(this.product);
  }
}
