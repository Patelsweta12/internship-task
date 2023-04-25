import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerModule } from './customer/customer.module';

import { CustomerService } from './customer/customer.service';



@NgModule({
    declarations: [
        AppComponent,
       ],
    providers: [CustomerService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CustomerModule

       
    ]
})
export class AppModule { }
