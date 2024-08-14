import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nasted2RoutingModule } from './nasted2-routing.module';
import { Nasted21Component } from './nasted2.1/nasted2.1.component';
import { Nasted22Component } from './nasted2.2/nasted2.2.component';

@NgModule({
  declarations: [
    Nasted21Component,
    Nasted22Component
  ],
  imports: [
    CommonModule,
    Nasted2RoutingModule
  ]
})
export class Nasted2Module { }
