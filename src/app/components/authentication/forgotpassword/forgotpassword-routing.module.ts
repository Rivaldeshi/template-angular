import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { Cover2Component } from './cover2/cover2.component';
import { CoverComponent } from './cover/cover.component';

const routes: Routes = [
  {path:"forgotpassword/basic",component:BasicComponent},
  {path:"forgotpassword/cover",component:CoverComponent},
  {path:"forgotpassword/cover2",component:Cover2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotpasswordRoutingModule { }
