import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfilesettingsComponent } from './profilesettings/profilesettings.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from "ng2-date-picker";
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from '@ks89/angular-modal-gallery';
@NgModule({
  declarations: [HomeComponent, ProfilesettingsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule,
    DpDatePickerModule,
    NgSelectModule,
    SharedModule,
    MaterialModuleModule,
    GalleryModule,
    LightboxModule,
  ],
})
export class ProfileModule {}
