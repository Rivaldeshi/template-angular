import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CoverComponent } from './cover/cover.component';
import { Cover2Component } from './cover2/cover2.component';

const routes: Routes = [
  {path:"lockscreen/basic",component:BasicComponent},
  {path:"lockscreen/cover",component:CoverComponent},
  {path:"lockscreen/cover2",component:Cover2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockscreenRoutingModule { }
