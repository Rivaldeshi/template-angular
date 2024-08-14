import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoStepVerificationRoutingModule } from './two-step-verification-routing.module';
import { BasicComponent } from './basic/basic.component';
import { CoverComponent } from './cover/cover.component';
import { Cover2Component } from './cover2/cover2.component';


@NgModule({
  declarations: [
    BasicComponent,
    CoverComponent,
    Cover2Component
  ],
  imports: [
    CommonModule,
    TwoStepVerificationRoutingModule
  ]
})
export class TwoStepVerificationModule { }
