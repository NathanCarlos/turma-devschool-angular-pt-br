import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { CreateProductPageComponent } from './pages/create-products/create-products-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    SellPageComponent,
    DetailsPageComponent,
    CreateProductPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class SellModule { }
