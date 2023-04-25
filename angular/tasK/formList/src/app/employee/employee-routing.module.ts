import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';

const routes: Routes = [
  { path: '',redirectTo: 'emp-list',pathMatch: 'full'},
 { path: 'emp-list', component: EmpListComponent},
 { path: 'emp-form', component: EmpFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
