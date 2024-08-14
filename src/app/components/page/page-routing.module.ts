import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmptyComponent } from './empty/empty.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PricingtablesComponent } from './pricingtables/pricingtables.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TasksComponent } from './tasks/tasks.component';
import { TeamComponent } from './team/team.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:'page/aboutus',component:AboutusComponent},
  {path:'page/contacts',component:ContactsComponent},
  {path:'page/contactus',component:ContactusComponent},
  {path:'page/empty',component:EmptyComponent},
  { path: 'page/faqs', component: FaqsComponent },
  {path:'page/pricingtables',component:PricingtablesComponent},
  {path:'page/reviews',component:ReviewsComponent},
  {path:'page/tasks',component:TasksComponent},
  {path:'page/team',component:TeamComponent},
  {path:'page/terms-conditions',component:TermsConditionsComponent},
  {path:'page/timeline',component:TimelineComponent},
  {path:'page/todolist',component:TodolistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
