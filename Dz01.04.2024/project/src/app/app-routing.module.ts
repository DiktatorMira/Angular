import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  // { path: 'home', component: ProductListComponent },
  // { path: 'about', component: ProductDetailsComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // По умолчанию переходим на домашнюю страницу
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
