import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellPageComponent } from './features/sell/pages/sell-page/sell-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/sell', pathMatch: 'full' },
  { path: 'sell', component: SellPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }