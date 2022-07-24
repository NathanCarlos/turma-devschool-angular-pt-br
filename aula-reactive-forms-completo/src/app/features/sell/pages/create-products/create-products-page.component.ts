import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  templateUrl: './create-products-page.component.html',
  styleUrls: ['./create-products-page.component.scss']
})
export class CreateProductPageComponent implements OnInit {

  formProduto = new FormGroup({
    descricao: new FormControl('', [Validators.required]),
    quantidade: new FormControl(1, [Validators.required]),
    preco: new FormControl(0, [Validators.required, Validators.min(50)]),
    imagem: new FormControl('')
  });

  constructor(
    private router: Router,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    // this.formProduto.controls['imagem'].disable();
    this.formProduto.controls['imagem'].setValue('https://konduto-blog-assets.s3.amazonaws.com/171207-security.png');
  }

  onSubmit() {
    const formValue = this.formProduto.value;
    this.productsService.create(formValue);
    this.router.navigateByUrl('/sell');
  }

}
