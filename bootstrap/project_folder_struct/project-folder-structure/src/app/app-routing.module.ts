import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/components/master/master.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'',
    component:MasterComponent,
    children: [{
      path:'',
      redirectTo:'landing-page',
      pathMatch:'full'
    }]
  },
  
    {
      path:'',
      loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)
    },
    {
      path:'**',
      component:NotFoundPageComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
