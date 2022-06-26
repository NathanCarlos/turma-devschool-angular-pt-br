import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos";

  produto = {
    descricao: "Playstation 5",
    preco: 4600,
    quantidade: 1,
    imagem: "https://s03.video.glbimg.com/x720/8619970.jpg"
  };

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

}
