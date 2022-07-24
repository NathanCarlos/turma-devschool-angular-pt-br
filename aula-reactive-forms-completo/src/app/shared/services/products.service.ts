import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/sell/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product> = [
    {
      id: 1,
      descricao: "Playstation 5",
      preco: 4600,
      quantidade: 1,
      imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
      disponivel: true,
    },
    {
      id: 2,
      descricao: "Playstation 4",
      preco: 2900,
      quantidade: 1,
      imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_680513-MLA46911917058_072021-V.webp",
      disponivel: true,
    },
    {
      id: 3,
      descricao: "Playstation 5 1TB",
      preco: 4800,
      quantidade: 0,
      imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
      disponivel: false,
    },
    {
      id: 4,
      descricao: "Playstation 4 1TB",
      preco: 2900,
      quantidade: 2,
      imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_680513-MLA46911917058_072021-V.webp",
      disponivel: true,
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(product: Product) {
    product.id = this.generateNexId();
    product.disponivel = true;
    this.products.push(product);
  }

  generateNexId() {
    return this.products[(this.products.length - 1)].id + 1;
  }
}
