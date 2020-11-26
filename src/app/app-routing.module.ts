import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';
import {UpdateComponent} from './update/update.component';
import {NavComponent} from './nav/nav.component';


const routes: Routes = [
 // { path: '', pathMatch: 'full', redirectTo: 'nav' },
  {
    path: '',
    component: NavComponent
  },
  {
    path: 'list', component: EmployeesComponent
  },
  {
    path: 'list/employee/add/:id',
    component: EditComponent
  }, {
    path: 'list/employee/add/:id',
    component: EditComponent
  },
  {
    path: 'list/employee/delete/:id',
    component: DeleteComponent
  },
  {
    path: 'list/employee/update/:id',
    component: UpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
