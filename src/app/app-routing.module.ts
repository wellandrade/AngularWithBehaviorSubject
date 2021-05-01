import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './views/home/home.component';
import { CrudComponent } from './views/product/crud/crud.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: CrudComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/list', component: ProductReadComponent },
  { path: 'products/update/:id', component: ProductUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
