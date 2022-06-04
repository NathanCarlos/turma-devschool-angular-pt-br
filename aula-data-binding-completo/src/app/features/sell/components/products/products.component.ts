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

}
