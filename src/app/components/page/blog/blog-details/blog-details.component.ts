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
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
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
      src: './assets/img/gallery/4.jpg',
      text: 'The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.',
      date: '12,Dec 2022 - 04:34PM',
      name: 'Json Taylor -',
      text2: 'N.A.S.A',
    },
    {
      src: './assets/img/gallery/5.jpg',
      text: 'The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.',
      date: '12,Dec 2022 - 04:34PM',
      name: 'Json Taylor -',
      text2: 'N.A.S.A',
    },
    {
      src: './assets/img/gallery/6.jpg',
      text: 'The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.',
      date: '12,Dec 2022 - 04:34PM',
      name: 'Json Taylor -',
      text2: 'N.A.S.A',
    },
  ];
}
