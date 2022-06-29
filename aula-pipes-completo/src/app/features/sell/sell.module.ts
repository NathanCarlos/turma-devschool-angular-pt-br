import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class SellModule { }
