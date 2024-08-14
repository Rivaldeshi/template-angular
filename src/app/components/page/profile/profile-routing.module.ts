import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilesettingsComponent } from './profilesettings/profilesettings.component';

const routes: Routes = [
  {path:"profile/home",component:HomeComponent},
  {path:"profile/profilesettings",component:ProfilesettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
