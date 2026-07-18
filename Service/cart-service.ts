import { Injectable } from '@angular/core';

@Injectable({// this injectable decorator tells angular this is service and u need to create obj for it
  providedIn: 'root',
})
export class CartService {
  cart = 0;
                     //try to add all the functions here it self dont do it in every component
}
