import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';


// cart-item.model.ts

export interface CartItem {
    product: Product;
    quantity: number;
  }
  @Pipe({
    name: 'filter'
  })
export class FilterPipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm) return products;
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
