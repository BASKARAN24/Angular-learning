import { Component } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  constructor(public cartService:CartService){}
  clearProduct(){
    this.cartService.cart = 0;
    alert('All products are deleted successfully');
  }
}
