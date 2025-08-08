import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'div [product-card]',
  imports: [],
  templateUrl: './product-card.html'
})
export class ProductCard {

  @Input() product!: Product;

  @Output() productEventEmmiter: EventEmitter<Product> = new EventEmitter();

  onAddCart(product: Product){
    this.productEventEmmiter.emit(product);
  }
}
