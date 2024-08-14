import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nasted21Component } from './nasted2.1/nasted2.1.component';
import { Nasted22Component } from './nasted2.2/nasted2.2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'nasted2.1',
        component: Nasted21Component,
      },
      {
        path: 'nasted2.2',
        component: Nasted22Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Nasted2RoutingModule { }
