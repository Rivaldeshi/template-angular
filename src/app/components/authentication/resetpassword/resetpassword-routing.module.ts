import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { BasicComponent } from './basic/basic.component';
import { Cover2Component } from './cover2/cover2.component';

const routes: Routes = [
  {path:"resetpassword/basic",component:BasicComponent},
  {path:"resetpassword/cover",component:CoverComponent},
  {path:"resetpassword/cover2",component:Cover2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetpasswordRoutingModule { }
