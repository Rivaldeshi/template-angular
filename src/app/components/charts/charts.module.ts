import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EchartsComponent } from './echarts/echarts.component';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    ChartjsComponent,
    EchartsComponent,
    ApexchartsComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedModule,
    NgApexchartsModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ]
})
export class ChartsModule { }
