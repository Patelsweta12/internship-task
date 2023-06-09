import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequiredService } from '../core/required.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  // { path: '',redirectTo: 'product-list',pathMatch: 'full'},
  { path: 'product-list', component: ProductListComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent,canActivate: [RequiredService] }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
