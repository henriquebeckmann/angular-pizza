import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {
private products: ProductType[] = [
    {
      id: 1,
      image: "pizza_1.png",
      title: "Delícia de Carne",
      description: "Pepperoni, cebola, bacon, molho de tomate, linguiça, pimentão, cogumelos, molho de pimenta, abacaxi",
      date: '2022-12-27'
    },
    {
      id: 2,
      image: "pizza_2.png",
      title: "Premiada do Mar",
      description: "Pimentão, queijo, camarões, lulas, mexilhões, salmão",
      date: '2022-12-27'
    },
    {
      id: 3,
      image: "pizza_3.png",
      title: "Bacon e Linguiça",
      description: "Bacon, queijo, linguiça, abacaxi, molho de tomate",
      date: '2022-12-27'
    },
    {
      id: 4,
      image: "pizza_4.png",
      title: "Delícia de Frango",
      description: "Frango, abacaxi, queijo Pepperoni, molho de pizza, molho de tomate",
      date: '2022-12-27'
    },
    {
      id: 5,
      image: "pizza_5.png",
      title: "Barbecue Premium",
      description: "Porco BBQ, molho de churrasco, queijo, frango, molho de pizza, molho de pimenta",
      date: '2022-12-27'
    },
    {
      id: 6,
      image: "pizza_6.png",
      title: "Pepperoni Duplo",
      description: "Pepperoni, queijo, duas variedades de salsicha: frita e cozida",
      date: '2022-12-27'
    },
    {
      id: 7,
      image: "pizza_7.png",
      title: "Trio de Frango",
      description: "Frango grelhado, frango cozido, nuggets de frango, pimentão, queijo, cogumelos, molho de pizza",
      date: '2022-12-27'
    },
    {
      id: 8,
      image: "pizza_8.png",
      title: "Quatro Queijos",
      description: "Queijo Jugas, Queijo azul, Queijo Mussarela, Queijo secreto",
      date: '2022-12-27'
    },
  ]


  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<ProductType>{
    return this.http.get<ProductType>(`https://testologia.site/pizzas?id=${id}`)

    // return this.products.find(item => (item.id === id))
  }
  createOrder(data:{product:string,address:string,phone:string}){
    return this.http.post<{ success:boolean,message?:string }>(`https://testologia.site/order-pizza`,data)

    // return this.products.find(item => (item.id === id))
  }
}
