import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CoverComponent } from './cover/cover.component';
import { Cover2Component } from './cover2/cover2.component';

const routes: Routes = [
  {path:"createpassword/basic",component:BasicComponent},
  {path:"createpassword/cover",component:CoverComponent},
  {path:"createpassword/cover2",component:Cover2Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatepasswordRoutingModule { }
