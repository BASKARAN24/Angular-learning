import { Component } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(public cartService:CartService){}
  viewProductsCount(){
    alert(this.cartService.cart);
  }
}
