import {Injectable} from '@angular/core';
import {CartService} from "./cart.service";

@Injectable()
export class CartProductService {
  count: number = 0

  constructor(private cartService:CartService) {
  }

  // getCommonAmount(){
  //   return this.count+'/'+ this.cartService.count
  // }
}
