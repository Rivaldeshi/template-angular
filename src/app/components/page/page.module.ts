import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
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
import { BlogModule } from './blog/blog.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { InvoiceModule } from './invoice/invoice.module';
import { MailModule } from './mail/mail.module';
import { ProfileModule } from './profile/profile.module';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { SwiperModule } from 'swiper/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AboutusComponent,
    ContactusComponent,
    PricingtablesComponent,
    TimelineComponent,
    TeamComponent,
    TodolistComponent,
    TasksComponent,
    ReviewsComponent,
    FaqsComponent,
    TermsConditionsComponent,
    EmptyComponent,
    ContactsComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    EcommerceModule,
    MailModule,
    BlogModule,
    InvoiceModule,
    ProfileModule,
    SharedModule,
    SwiperModule,
    NgSelectModule,
    MaterialModuleModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
  ],
})
export class PageModule {}
