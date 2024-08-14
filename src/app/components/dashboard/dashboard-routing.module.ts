import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { SalesComponent } from './sales/sales.component';
import { CryptoComponent } from './crypto/crypto.component';
import { CrmComponent } from './crm/crm.component';
import { HrmComponent } from './hrm/hrm.component';
import { JobsComponent } from './jobs/jobs.component';
import { NftComponent } from './nft/nft.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectsComponent } from './projects/projects.component';
import { StocksComponent } from './stocks/stocks.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [

{  path:"",
  children:[
    {path:"dashboard/analytics", component:AnalyticsComponent},
    {path:"dashboard/crypto",component: CryptoComponent},
    {path:"dashboard/ecommerce",component: EcommerceComponent},
    {path:"dashboard/sales",component: SalesComponent},
    {path:"dashboard/crm",component: CrmComponent},
    {path:"dashboard/jobs",component:JobsComponent },
   {path:"dashboard/hrm",component:HrmComponent },
   {path:"dashboard/personal",component:PersonalComponent },
   {path:"dashboard/nft",component:NftComponent },
   {path:"dashboard/projects",component:ProjectsComponent },
   {path:"dashboard/stocks",component:StocksComponent },
   {path:"dashboard/course",component:CourseComponent },

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
