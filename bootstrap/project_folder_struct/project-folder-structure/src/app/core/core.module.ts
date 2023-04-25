import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MasterComponent } from './components/master/master.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HeaderComponent,
    LandingPageComponent,
    MasterComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  
  ]
})
export class CoreModule { }
