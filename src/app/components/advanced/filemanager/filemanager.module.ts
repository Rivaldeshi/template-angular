import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilemanagerRoutingModule } from './filemanager-routing.module';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { FilemanagerlistComponent } from './filemanagerlist/filemanagerlist.component';
import { FiledetailsComponent } from './filedetails/filedetails.component';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import'hammerjs';
import 'mousetrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    FilemanagerComponent,
    FilemanagerlistComponent,
    FiledetailsComponent,
  ],
  imports: [
    CommonModule,
    FilemanagerRoutingModule,
    SharedModule,
    CarouselModule,
    NgxDropzoneModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,  
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    GalleryModule,
    SwiperModule,
  ],
})
export class FilemanagerModule {}
