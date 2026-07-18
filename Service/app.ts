import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Checkout } from "./checkout/checkout";
import { Navbar } from "./navbar/navbar";
import { Product } from "./product/product";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Checkout, Navbar, Product],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('shopping-cart-app');
}
