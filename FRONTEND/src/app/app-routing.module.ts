import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Order1Component } from './order1/order1.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'addOrder', component: Order1Component },
  { path: 'orders', component: OrdersComponent },
  { path: 'updateOrder/:id', component: Order1Component },
  { path: '**', redirectTo: '/orders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
