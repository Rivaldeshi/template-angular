import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CoverComponent } from './cover/cover.component';
import { Cover2Component } from './cover2/cover2.component';

const routes: Routes = [
  {path:"two-step-verification/basic",component:BasicComponent},
  {path:"two-step-verification/cover",component:CoverComponent},
  {path:"two-step-verification/cover2",component:Cover2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoStepVerificationRoutingModule { }
