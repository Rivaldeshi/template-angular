import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { BlackquotesComponent } from './blackquotes/blackquotes.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CollapseComponent } from './collapse/collapse.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { ListComponent } from './list/list.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { ProgressComponent } from './progress/progress.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ToastComponent } from './toast/toast.component';

const routes: Routes = [
  {path:"components/accordion",component:AccordionComponent},
  {path:"components/alerts",component:AlertsComponent},
  {path:"components/badges",component:BadgesComponent},
  {path:"components/avatars",component:AvatarsComponent},
  {path:"components/blackquotes",component:BlackquotesComponent},
  {path:"components/buttons",component:ButtonsComponent},
  {path:"components/cards",component:CardsComponent},
  {path:"components/collapse",component:CollapseComponent},
  {path:"components/indicators",component:IndicatorsComponent},
  {path:"components/list",component:ListComponent},
  {path:"components/listgroup",component:ListgroupComponent},
  {path:"components/progress",component:ProgressComponent},
  {path:"components/skeleton",component:SkeletonComponent},
  {path:"components/spinners",component:SpinnersComponent},
  {path:"components/toast",component:ToastComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
