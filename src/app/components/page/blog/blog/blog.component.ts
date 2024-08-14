import { Component } from '@angular/core';
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,

} from 'swiper';
interface image{
  src:string;
  id:string,

  offer:string,
  text:string,
  data:string,
  data1:string,
  data2:string,
}
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,

]);
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  indexNumber = 1;
  slidesPerView!: 3;

  thumbsSwiper: unknown;

    setThumbsSwiper(swiper: unknown) {
      this.thumbsSwiper = swiper;
    }

  slidesStore = [
    {
      id:"1",
      src: "./assets/images/profile/1.jpg",
      name:"Dhaval Patel",
      date:"12 Aug, 2022",
      text:"Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation.",

    },
    {
      id:"2",
      src:"./assets/images/profile/3.jpg",
      name:"Navin Telsko",
      date:"12 Aug, 2022",
      text:"Consetetur diam voluptua justo eirmod sed dolor. Ipsum amet clita ut nonumy justo, dolore et dolor dolor clita dolor justo Lorem sanctus ipsum sea sit"

    },
    {
      id:"3",
      src:"./assets/images/profile/2.jpg",
      name:"Mosh",
      date:"16 Apr, 2022",
      text:"Tempor diam sed vero sed nonumy sed lorem gubergren amet. No no consetetur at duo duo sed et lorem dolor. Sea kasd gubergren voluptua lorem."
    },
    {
      id:"4",
      src: "./assets/images/profile/1.jpg",
      name:"Dhaval Patel",
      date:"12 Aug, 2022",
      text:" Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation."
    },
    {
      id:"5",
      src:"./assets/images/profile/1.jpg",
      name:"Dhaval Patel",
      date:"12 Aug, 2022",
      text:" Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation."
    },

  ];
}
