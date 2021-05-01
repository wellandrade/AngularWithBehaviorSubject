import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _baseURL = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this._baseURL, product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._baseURL);
  }

  getProductById(id: string): Observable<Product> {
    const url = `${this._baseURL}/${id}`;

    return this.http.get<Product>(url);
  };

  update(product: Product): Observable<Product> {
    const url = `${this._baseURL}/${product.id}`;
    
    return this.http.put<Product>(url, product);
  }

  delete(id: string): Observable<Product> {
    const url = `${this._baseURL}/${id}`;

    return this.http.delete<Product>(url);
  }

}
