import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nasted1Component } from './nasted1/nasted1.component';
import { Nasted21Component } from './nasted2/nasted2.1/nasted2.1.component';
import { Nasted22Component } from './nasted2/nasted2.2/nasted2.2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'nasted1',
        component: Nasted1Component,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'nasted2',
        component: Nasted21Component,
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'nasted22',
        component: Nasted22Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class NastedmenuRoutingModule { }
