import {Component, OnInit} from '@angular/core';

import {CartService} from "../../../services/cart.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedState: boolean = false

  constructor(public cartService: CartService, private authService: AuthService) {
  }

  ngOnInit() {
    1
    console.log(this.loggedState);
    this.authService.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.loggedState = isLoggedIn
      console.log('state has changed ' + isLoggedIn)
    })
  }

  logIn() {
    this.authService.logIn()
  }

  logOut() {
    this.authService.logOut()
  }

  protected readonly Event = Event;
}
