import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { LeafletComponent } from './leaflet/leaflet.component';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedModule } from 'src/app/shared/sharedmodule';

@NgModule({
  declarations: [
    LeafletComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    HttpClientModule,
    LeafletModule,
    SharedModule
  ]
})
export class MapsModule { }
