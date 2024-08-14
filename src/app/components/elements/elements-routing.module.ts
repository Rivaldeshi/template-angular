import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ColumnsComponent } from './columns/columns.component';
import { GridsComponent } from './grids/grids.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';

const routes: Routes = [
  {path:"elements/breadcrumb",component:BreadcrumbComponent},
  {path:"elements/columns",component:ColumnsComponent},
  {path:"elements/grids",component:GridsComponent},
  {path:"elements/megamenu",component:MegamenuComponent},
  {path:"elements/nav-tabs",component:NavTabsComponent},
  {path:"elements/nav-bar",component:NavbarComponent},
  {path:"elements/pagination",component:PaginationComponent},
  {path:"elements/scrollspy",component:ScrollspyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
