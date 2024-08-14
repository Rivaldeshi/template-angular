import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EchartsComponent } from './echarts/echarts.component';

const routes: Routes = [
  {path:"charts/apex",component:ApexchartsComponent},
  {path:"charts/chartjs",component:ChartjsComponent},
  {path:"charts/echarts",component:EchartsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
