import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail/mail.component';
import { ChatComponent } from './chat/chat.component';
import { MailSettingsComponent } from './mail-settings/mail-settings.component';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MailComponent,
    ChatComponent,
    MailSettingsComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    SharedModule,
    NgSelectModule,
    SwiperModule,
    FormsModule
    
  ]
})
export class MailModule { }
