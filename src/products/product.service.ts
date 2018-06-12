import {IProduct} from './product';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { tap } from 'rxjs/operators';



@Injectable()
export class ProductService {
  backendUrl = 'http://localhost:8000/products';
  constructor(private _http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.backendUrl).pipe(
      tap(val => console.log(`received this: ${val}`))
    );
  }
  getProductById(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(this.backendUrl + `/${id}`).pipe(
      tap(val => console.log(`received this: ${val}`))
    );
  }
}
