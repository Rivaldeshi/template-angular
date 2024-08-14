import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';

  const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'authentication/404error',
          component: Error404Component,
        },
        {
          path: 'authentication/500error',
          component: Error500Component,
        },
      ],
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorpagesRoutingModule { }
