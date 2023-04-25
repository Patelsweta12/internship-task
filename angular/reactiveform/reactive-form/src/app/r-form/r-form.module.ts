import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RFormRoutingModule } from './r-form-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    RFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class RFormModule { }
