import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import { GridsComponent } from './grids/grids.component';
import { ColumnsComponent } from './columns/columns.component';
import { SharedModule } from 'src/app/shared/sharedmodule';

@NgModule({
  declarations: [
    NavbarComponent,
    MegamenuComponent,
    NavTabsComponent,
    ScrollspyComponent,
    BreadcrumbComponent,
    PaginationComponent,
    GridsComponent,
    ColumnsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }
