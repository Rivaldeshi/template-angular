import { Routes } from "@angular/router";

export const Pages:Routes =
[

  {
    path: '',
    loadChildren: () => import('../../components/page/page.module').then(m => m.PageModule)
  },

];
