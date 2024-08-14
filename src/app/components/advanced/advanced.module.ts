import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { RangesliderComponent } from './rangeslider/rangeslider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CalenderComponent } from './calender/calender.component';
import { SharedModule } from 'src/app/shared/sharedmodule';
import { SimplebarAngularModule } from 'simplebar-angular';
import'hammerjs';
import 'mousetrap';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { RatingComponent } from './rating/rating.component';
import { DraggableCardsComponent } from './draggable-cards/draggable-cards.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { FilemanagerModule } from 'src/app/components/advanced/filemanager/filemanager.module';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { SwiperModule } from 'swiper/angular';
import { BarRatingModule } from "ngx-bar-rating";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ng-gallery/lightbox';
import { DndModule } from 'ngx-drag-drop';
import {
  GalleryModule,
} from '@ks89/angular-modal-gallery';
import { RangeSliderModule } from 'ngx-range-slider';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSliderModule } from 'ngx-slider-v2';
import { LightgalleryModule } from 'lightgallery/angular';

@NgModule({
  declarations: [
    RangesliderComponent,
    CarouselComponent,
    GalleryComponent,
    CalenderComponent,
    SweetalertComponent,
    RatingComponent,
    DraggableCardsComponent,
    NotificationsComponent,
    TreeviewComponent,
  ],
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    SharedModule,
    SimplebarAngularModule,
    GalleryModule,
    LightboxModule,
    FilemanagerModule,
    MaterialModuleModule,
    SwiperModule,
    BarRatingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FormsModule,
    ReactiveFormsModule,
    DndModule,
    CarouselModule,
    RangeSliderModule,
    NgxSliderModule,
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    LightgalleryModule,
  ],
  providers: [{ provide: ToastrService, useClass: ToastrService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdvancedModule {}
