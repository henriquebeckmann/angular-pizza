import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  public formValues = {
    productTitle: "",
    address: "",
    phone: ""
  }

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  private subscription: Subscription | null = null

  ngOnInit() {
    // if (this.cartService.product-card){
    //   this.formValues.productTitle=this.cartService.product-card
    // }

    // const productParam=this.activatedRoute.snapshot.queryParamMap.get('product')
    //
    // if (productParam){
    //   this.formValues.productTitle = productParam
    // }

    this.subscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['product']) {
        this.formValues.productTitle = params['product']
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  public createOrder() {

    if (!this.formValues.productTitle) {
      alert("fill pizza");
      return;
    }
    if (!this.formValues.address) {
      alert("fill address");
      return;
    }
    if (!this.formValues.phone) {
      alert("fill phone");
      return;
    }

    this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone
    })
      .subscribe(response => {
        if (response.success && !response.message){
          alert("Thank You!");

          this.formValues = {
            productTitle: "",
            address: "",
            phone: ""
          }
        }else {
          alert('Ошибка!')        }
          })


  }
}
