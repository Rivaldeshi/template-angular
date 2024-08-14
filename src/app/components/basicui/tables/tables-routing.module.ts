import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasictablesComponent } from './basictables/basictables.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { EdittablesComponent } from './edittables/edittables.component';

const routes: Routes = [
  {path:"tables/basictables",component:BasictablesComponent},
  {path:"tables/datatables",component:DatatablesComponent},
  {path:"tables/edittables",component:EdittablesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
