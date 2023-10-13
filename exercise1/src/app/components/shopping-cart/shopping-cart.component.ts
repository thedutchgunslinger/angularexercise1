import { Component } from '@angular/core';
import { product } from '../../modules/product/product.module';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  shoppingCart: product[] = ShoppingCartService.getCart();
}
