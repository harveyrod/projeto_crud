import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void { // Método de display de mensagens
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  // Método de criação do produto
  create (product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Método de leitura do produto
  read() : Observable<Product[]> {  
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Método de leitura por ID
  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}` // Faz referência ao endereço URL da linha "12"
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Método Update de produto
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}` // Faz referência ao endereço URL da linha "12"
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Método Deletar produto
  delete(id: number): Observable<Product> {    
    const url = `${this.baseUrl}/${id}` // Faz referência ao endereço URL da linha "12"
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

   // Método de tratamento de erro
  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
