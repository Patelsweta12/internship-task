import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankListComponent } from './bank-list/bank-list.component';

const routes: Routes = [
  {path:'bank-list',component:BankListComponent},
  {path:'bank-details',component:BankDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
