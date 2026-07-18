import { Component } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

    constructor(public cartService:CartService){
    }
    addProduct(){
      this.cartService.cart++;
      alert('Product added succesfully');
    }
}
