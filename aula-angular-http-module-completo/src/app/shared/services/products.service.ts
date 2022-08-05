import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/sell/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = 'http://localhost:3000';

  options = { 
    headers: {
      'content-type': 'application/json'
    }
  };

  products: Array<Product> = [];

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Array<Product>>(this.baseUrl + '/products/all', this.options);
  }

  getById(id: number) {
    return this.httpClient.get<Product>(this.baseUrl + `/products/${id}`, this.options);
  }

  create(product: Product) {
    return this.httpClient.post(this.baseUrl + '/products/create', product, this.options);
  }

  remove(id: number) {
    return this.httpClient.delete(this.baseUrl + '/products/remove/' + id, this.options);
  }

  update(product: Partial<Product>) {
    return this.httpClient.put(this.baseUrl + '/products/update/' + product.id, { descricao: 'Produto alterado' }, this.options);
  }

  generateNexId() {
    return this.products[(this.products.length - 1)].id + 1;
  }
}
