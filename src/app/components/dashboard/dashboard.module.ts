import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SalesComponent } from './sales/sales.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CryptoComponent } from './crypto/crypto.component';
import { JobsComponent } from './jobs/jobs.component';
import { NftComponent } from './nft/nft.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProjectsComponent } from './projects/projects.component';
import { HrmComponent } from './hrm/hrm.component';
import { CrmComponent } from './crm/crm.component';
import { PersonalComponent } from './personal/personal.component';
import { StocksComponent } from './stocks/stocks.component';
import { CourseComponent } from './course/course.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    SalesComponent,
    EcommerceComponent,
    CryptoComponent,
    JobsComponent,
    NftComponent,
    AnalyticsComponent,
    ProjectsComponent,
    HrmComponent,
    CrmComponent,
    PersonalComponent,
    StocksComponent,
    CourseComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgChartsModule,
    NgApexchartsModule,
    CarouselModule,
    SharedModule,
    NgxChartsModule,
    NgSelectModule,
  ],
})
export class DashboardModule {}
