import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService, private cartService: CartService, private router: Router, private http: HttpClient) {
  }

  public products: ProductType[] = []
  loading: boolean = false

  ngOnInit() {
    // this.lateData = new Promise<string>(function (resolve) {
    //   setTimeout(() => {
    //     resolve('Hello!')
    //   }, 3000)
    // })
    // this.products = this.productService.getProducts()
    this.loading = true
    // @ts-ignore
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data
          },
          error: (error) => {
            console.log(error)
            this.router.navigate(['/'])
          }
        }
      )
  }


  // public addToCart(title: string): void {
  //   this.cartService.product-card = title
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}})
  //   // this.scrollTo(target)
  //   // this.formValues.productTitle = title
  //   // this.cart.count++
  //   // this.products=this.products.filter(item=>item.title.toUpperCase()!==title.toUpperCase())
  // }
}
