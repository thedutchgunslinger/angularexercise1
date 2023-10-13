import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../../modules/product/product.module';
import { ShoppingCartService } from '../../services/shopping-cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input({alias: 'product'}) productData!: product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  koopProduct(){
    this.productData.amount--;
    ShoppingCartService.addProduct(this.productData);
    this.productClicked.emit(this.productData);

  }
}
