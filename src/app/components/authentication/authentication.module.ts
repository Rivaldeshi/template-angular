import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { UndermaintainanceComponent } from './undermaintainance/undermaintainance.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { ErrorpagesModule } from './errorpages/errorpages.module';
import { SharedModule } from 'src/app/shared/sharedmodule';

@NgModule({
  declarations: [
    UndermaintainanceComponent,
    UnderconstructionComponent,
    ComingsoonComponent
  ],
  imports: [
    CommonModule,
    ErrorpagesModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
