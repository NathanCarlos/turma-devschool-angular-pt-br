import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellPageComponent } from './pages/sell-page/sell-page.component';



@NgModule({
  declarations: [
    ProductsComponent,
    SellPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsComponent,
    SellPageComponent
  ]
})
export class SellModule { }
