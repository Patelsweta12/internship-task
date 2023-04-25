import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MasterComponent } from './core/components/master/master.component';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path:'',component:MasterComponent,
    children:[
      {
        path:'',component:LandingPageComponent,
        canActivate:[AuthGuard]
      }
    ]
  },
  {
    path:'',
    loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
