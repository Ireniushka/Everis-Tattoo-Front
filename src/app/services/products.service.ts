import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<any>{
    const endPoint = 'localhost:8080/everis/tattoo';
    return this.http.get(endPoint).pipe(
      map((res) => {
        console.table(res);
        return res;
      })
    )
  }

  addProduct(product: any): Observable<any> {
    const endPoint = 'http://localhost:8080/everis/tattoo';
    return this.http.post(endPoint, {
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      image: product.image
    });
  }

  getProduct(id: number): Observable<any> {
    const endPoint = 'localhost:8080/everis/tattoo/' + id;
    return this.http.get(endPoint).pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    )
  }

  deleteProduct(id: number): Observable<any>{
    const endPoint = 'localhost:8080/everis/tattoo/' + id;
    return this.http.delete(endPoint).pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    )
  }

}
