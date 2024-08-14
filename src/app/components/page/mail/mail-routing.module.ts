import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MailComponent } from './mail/mail.component';
import { MailSettingsComponent } from './mail-settings/mail-settings.component';

const routes: Routes = [
  {path:"mail/chat",component:ChatComponent},
  {path:"mail/mail",component:MailComponent},
  {path:"mail/mail-settings",component:MailSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
