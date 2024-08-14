import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { TablericonsComponent } from './tablericons/tablericons.component';
import { RemixiconsComponent } from './remixicons/remixicons.component';
import { SharedModule } from 'src/app/shared/sharedmodule';

@NgModule({
  declarations: [
    TablericonsComponent,
    RemixiconsComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    SharedModule
  ]
})
export class IconsModule { }
