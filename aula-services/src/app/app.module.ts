import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SellModule } from './features/sell/sell.module';
import { SharedModule } from './shared/shared.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
registerLocaleData(localePt); 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SellModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
