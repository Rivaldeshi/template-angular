import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { BadgesComponent } from './badges/badges.component';
import { BlackquotesComponent } from './blackquotes/blackquotes.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { ListComponent } from './list/list.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { ProgressComponent } from './progress/progress.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ToastComponent } from './toast/toast.component';
import { SharedModule } from 'src/app/shared/sharedmodule';

@NgModule({
  declarations: [
    AccordionComponent,
    AlertsComponent,
    AvatarsComponent,
    BadgesComponent,
    BlackquotesComponent,
    ButtonsComponent,
    CardsComponent,
    CollapseComponent,
    ListgroupComponent,
    ListComponent,
    IndicatorsComponent,
    ProgressComponent,
    SkeletonComponent,
    SpinnersComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }
