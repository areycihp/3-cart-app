import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../cart/cart';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart-modal',
  imports: [
    Cart
  ],
  templateUrl: './cart-modal.html'
})
export class CartModal {
  @Input() items: CartItem[] = [];
  // @Input() total = 0;
  @Output() idProductEventEmitter = new EventEmitter();
  @Output() openEventEmitter = new EventEmitter();

  onDeleteCart(id: number){
    this.idProductEventEmitter.emit(id);
  }

  openCart(): void{
    this.openEventEmitter.emit();
  }
}
