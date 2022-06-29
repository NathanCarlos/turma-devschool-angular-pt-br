import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos";

  telefone = "11987657864";

  exibeProduto = true;

  dataHoje = new Date();

  produto = {
    descricao: "Playstation 5",
    preco: 4600,
    quantidade: 1,
    imagem: "https://s03.video.glbimg.com/x720/8619970.jpg"
  };

  produtos: Array<Product> = [
    {
      descricao: "Playstation 5",
      preco: 4600,
      quantidade: 1,
      imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
      disponivel: true,
    },
    {
      descricao: "Playstation 4",
      preco: 2900,
      quantidade: 1,
      imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_680513-MLA46911917058_072021-V.webp",
      disponivel: true,
    },
    {
      descricao: "Playstation 5 1TB",
      preco: 4800,
      quantidade: 0,
      imagem: "https://s03.video.glbimg.com/x720/8619970.jpg",
      disponivel: false,
    },
    {
      descricao: "Playstation 4 1TB",
      preco: 2900,
      quantidade: 2,
      imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_680513-MLA46911917058_072021-V.webp",
      disponivel: true,
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("teste");
  }

  precoComDesconto (preco: number) {
    return preco * 0.90;
  }

  obterPrecoDesconto() {
    this.produto.preco = this.produto.preco * 0.90;
  }

  comprar() {
    alert("Produto comprado com sucesso!");
  }

  clicouTag() {
    alert("Você clicou em uma tag");
  }

  passouMouse() {
    alert("Você passou o mouse em cima de uma tag");
  }

  pressinouTecla(event: any) {
    console.log(event.target.value);
  }

  exibeProdutoSimNao() {
    this.exibeProduto = !this.exibeProduto;
  }

}
