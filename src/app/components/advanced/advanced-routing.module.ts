import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RangesliderComponent } from './rangeslider/rangeslider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CalenderComponent } from './calender/calender.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { DraggableCardsComponent } from './draggable-cards/draggable-cards.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RatingComponent } from './rating/rating.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  {path:'advanced/rangeslider',component:RangesliderComponent},
  {path:'advanced/carousel',component:CarouselComponent},
  {path:'advanced/gallery',component:GalleryComponent},
  {path:'advanced/calender',component:CalenderComponent},
  {path:'advanced/sweetalert',component:SweetalertComponent},
  {path:'advanced/draggable-cards',component:DraggableCardsComponent},
  {path:'advanced/treeview',component:TreeviewComponent},
  {path:'advanced/notifications',component:NotificationsComponent},
  {path:'advanced/rating',component:RatingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes), CarouselModule],
  exports: [RouterModule],
})
export class AdvancedRoutingModule {}
