import { Component, OnInit } from '@angular/core';
import { Products } from '../services/products';
import { Product } from '../models/product';

@Component({
  selector: 'cart-app',
  imports: [],
  templateUrl: './cart-app.html'
})
export class CartApp implements OnInit{

  products: Product[] = [];
  constructor(private service: Products){}

  ngOnInit(): void {
      this.products = this.service.findAll();
  }

}
