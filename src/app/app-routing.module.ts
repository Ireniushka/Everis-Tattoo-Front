import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';
import { IndexComponent } from './components/index/index.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: 'products',
    component: IndexComponent
  },
  {
    path: 'products/:id',
    component: ProductComponent
  },
  {
    
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
