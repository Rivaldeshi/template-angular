import { Component } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
} from 'swiper';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
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
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  indexNumber = 1;

  thumbsSwiper: unknown;

  setThumbsSwiper(swiper: unknown) {
    this.thumbsSwiper = swiper;
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };
  breakPointsToggle!: boolean;
  breakpointChange() {
    this.breakPointsToggle = !this.breakPointsToggle;
    this.breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 },
    };
  }
  imageData = [
    {
      id: 1,
      src: './assets/img/gallery/1.jpg',
    },
    {
      src: './assets/img/gallery/2.jpg',
    },
    {
      src: './assets/img/gallery/4.jpg',
    },
    {
      src: './assets/img/gallery/5.jpg',
    },
    {
      src: './assets/img/gallery/6.jpg',
    },
    {
      src: './assets/img/gallery/7.jpg',
    },
    {
      src: './assets/img/gallery/8.jpg',
    },
    {
      src: './assets/img/gallery/9.jpg',
    },
    {
      src: './assets/img/gallery/10.jpg',
    },
  ];
  imageData1 = [
    {
      src: './assets/img/gallery/1.jpg',
    },
    {
      src: './assets/img/gallery/2.jpg',
    },
    {
      src: './assets/img/gallery/4.jpg',
    },
    {
      src: './assets/img/gallery/5.jpg',
    },
    {
      src: './assets/img/gallery/6.jpg',
    },
    {
      src: './assets/img/gallery/7.jpg',
    },
    {
      src: './assets/img/gallery/8.jpg',
    },
    {
      src: './assets/img/gallery/9.jpg',
    },
    {
      src: './assets/img/gallery/10.jpg',
    },
  ];
  imageData2 = [
    {
      src: './assets/img/gallery/1.jpg',
    },
    {
      src: './assets/img/gallery/2.jpg',
    },
    {
      src: './assets/img/gallery/4.jpg',
    },
    {
      src: './assets/img/gallery/5.jpg',
    },
    {
      src: './assets/img/gallery/6.jpg',
    },
    {
      src: './assets/img/gallery/7.jpg',
    },
    {
      src: './assets/img/gallery/8.jpg',
    },
    {
      src: './assets/img/gallery/9.jpg',
    },
    {
      src: './assets/img/gallery/10.jpg',
    },
  ];
  imageData3 = [
    {
      src: './assets/img/gallery/1.jpg',
    },
    {
      src: './assets/img/gallery/2.jpg',
    },
    {
      src: './assets/img/gallery/4.jpg',
    },
    {
      src: './assets/img/gallery/5.jpg',
    },
    {
      src: './assets/img/gallery/6.jpg',
    },
    {
      src: './assets/img/gallery/7.jpg',
    },
    {
      src: './assets/img/gallery/8.jpg',
    },
    {
      src: './assets/img/gallery/9.jpg',
    },
    {
      src: './assets/img/gallery/10.jpg',
    },
  ];
  imageData4 = [
    {
      src: './assets/img/gallery/1.jpg',
    },
    {
      src: './assets/img/gallery/2.jpg',
    },
    {
      src: './assets/img/gallery/4.jpg',
    },
    {
      src: './assets/img/gallery/5.jpg',
    },
    {
      src: './assets/img/gallery/6.jpg',
    },
    {
      src: './assets/img/gallery/7.jpg',
    },
    {
      src: './assets/img/gallery/8.jpg',
    },
    {
      src: './assets/img/gallery/9.jpg',
    },
    {
      src: './assets/img/gallery/10.jpg',
    },
  ];
  imageData5 = [
    {
      src: './assets/img/gallery/1.jpg',
    },
    {
      src: './assets/img/gallery/2.jpg',
    },
    {
      src: './assets/img/gallery/4.jpg',
    },
    {
      src: './assets/img/gallery/5.jpg',
    },
    {
      src: './assets/img/gallery/6.jpg',
    },
    {
      src: './assets/img/gallery/7.jpg',
    },
    {
      src: './assets/img/gallery/8.jpg',
    },
    {
      src: './assets/img/gallery/9.jpg',
    },
    {
      src: './assets/img/gallery/10.jpg',
    },
  ];
  imageData6 = [
    {
      src: './assets/img/gallery/1.jpg',
    },
    {
      src: './assets/img/gallery/2.jpg',
    },
    {
      src: './assets/img/gallery/4.jpg',
    },
    {
      src: './assets/img/gallery/5.jpg',
    },
    {
      src: './assets/img/gallery/6.jpg',
    },
    {
      src: './assets/img/gallery/7.jpg',
    },
    {
      src: './assets/img/gallery/8.jpg',
    },
    {
      src: './assets/img/gallery/9.jpg',
    },
    {
      src: './assets/img/gallery/10.jpg',
    },
  ];
  imageData7 = [
    {
      src: './assets/img/gallery/1.jpg',
    },
    {
      src: './assets/img/gallery/2.jpg',
    },
    {
      src: './assets/img/gallery/4.jpg',
    },
    {
      src: './assets/img/gallery/5.jpg',
    },
    {
      src: './assets/img/gallery/6.jpg',
    },
    {
      src: './assets/img/gallery/7.jpg',
    },
    {
      src: './assets/img/gallery/8.jpg',
    },
    {
      src: './assets/img/gallery/9.jpg',
    },
    {
      src: './assets/img/gallery/10.jpg',
    },
  ];
  imageData8 = [
    {
      src: './assets/img/gallery/1.jpg',
    },
    {
      src: './assets/img/gallery/2.jpg',
    },
    {
      src: './assets/img/gallery/4.jpg',
    },
    {
      src: './assets/img/gallery/5.jpg',
    },
    {
      src: './assets/img/gallery/6.jpg',
    },
    {
      src: './assets/img/gallery/7.jpg',
    },
    {
      src: './assets/img/gallery/8.jpg',
    },
    {
      src: './assets/img/gallery/9.jpg',
    },
    {
      src: './assets/img/gallery/10.jpg',
    },
  ];
}
