import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {from, map, Observable, Subscription} from "rxjs";
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  lateData: Promise<string> | null = null

  // private promise: Promise<string>
  private observable: Observable<number>

  constructor(public cart: CartService) {
    // this.promise = new Promise<string>(resolve => {
    //   setTimeout(() => {
    //     resolve('hello')
    //   }, 2000)
    // })
    this.observable = from([1, 2, 3, 4])
    // this.observable = new Observable((observer) => {
    //   let count = 0
    //   const interval = setInterval(() => {
    //     observer.next(count++)
    //   }, 1000);
    //   const timeOut_1 = setTimeout(() => {
    //     observer.complete()
    //   }, 4000);
    //   const timeOut_2 = setTimeout(() => {
    //     observer.error('world')
    //   }, 5000);
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval)
    //       clearTimeout(timeOut_1)
    //       clearTimeout(timeOut_2)
    //     }
    //   }
    // })
  }

  private subscription: Subscription | null = null

  ngOnInit() {
    setTimeout(() => {
      const mainModal = new bootstrap.Modal('#mainModal', {})
      mainModal.show()
    }, 3000)


    this.subscription = this.observable
      .pipe(
        map((num) => {
          return num * 7
        })
      )

      .subscribe((param: number) => {
        console.log('subscriber 1 : ', param)
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  test() {
    this.observable.subscribe({
      next: (param: number) => {
        console.log('subscriber 2: ', param)
      },
      error: (error: string) => {
        console.log('ERROR!!! ' + error)
      }
    })
  }
}
