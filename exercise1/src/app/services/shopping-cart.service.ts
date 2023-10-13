import { Injectable } from '@angular/core';
import { product } from '../modules/product/product.module';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  static shoppingCart: product[] = [];

  static addProduct(product: product) {
    ShoppingCartService.shoppingCart.push(product);
    console.log(this.shoppingCart);
  }

  static getCart() {
    return this.shoppingCart;
  }

  constructor() {}
}
