import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepasswordRoutingModule } from './createpassword-routing.module';
import { CoverComponent } from './cover/cover.component';
import { Cover2Component } from './cover2/cover2.component';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [
    CoverComponent,
    Cover2Component,
    BasicComponent
  ],
  imports: [
    CommonModule,
    CreatepasswordRoutingModule
  ]
})
export class CreatepasswordModule { }
