import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NastedmenuRoutingModule } from './nastedmenu-routing.module';
import { Nasted1Component } from './nasted1/nasted1.component';


@NgModule({
  declarations: [
    Nasted1Component
  ],
  imports: [
    CommonModule,
    NastedmenuRoutingModule
  ]
})
export class NastedmenuModule { }
