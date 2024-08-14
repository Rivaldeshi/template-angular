import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { UndermaintainanceComponent } from './undermaintainance/undermaintainance.component';
 import { LandingComponent } from '../page/landing/landing.component';

const routes: Routes = [
  {
    path: 'authentication',
    children: [
      { path: 'comingsoon', component: ComingsoonComponent },
      {
        path: 'underconstruction',
        component: UnderconstructionComponent,
      },
      {
        path: 'undermaintainance',
        component: UndermaintainanceComponent,
      },
    ],
  },
   {
     path: 'page/landing',
     component: LandingComponent,
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
