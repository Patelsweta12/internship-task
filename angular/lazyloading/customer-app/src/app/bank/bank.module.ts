import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';


@NgModule({
  declarations: [
    BankListComponent,
    BankDetailsComponent
  ],
  imports: [
    CommonModule,
    BankRoutingModule
  ]
})
export class BankModule { }
