import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  indexNumber = 1;

  thumbsSwiper: unknown;

  setThumbsSwiper(swiper: unknown) {
    this.thumbsSwiper = swiper;
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };

  // ngx owl carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    navText: [
      '<button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>',
      '<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>',
    ],
    margin: 15,
    autoWidth: false,
    autoHeight: false,
    navSpeed: 100,

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };
  imageData = [
    {
      src: './assets/img/users/2.jpg',
      name: 'Socrates Itumay',
      title: 'UI DEVELOPER',
      summary: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo.",
    },
    {
      src: './assets/img/users/12.jpg',
      name: 'Eos Tempor',
      title: 'UI DEVELOPER',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel ut impedit. Sapiente id libero reprehenderit accusantium nisi. Dolorum hic voluptas quia id.',
    },
    {
      src: './assets/img/users/3.jpg',
      name: 'Airi Satou',
      title: 'UI DEVELOPER',
      summary: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't  even slightly believable.",
    },
    {
      src: './assets/img/users/13.jpg',
      name: 'Mc Greggor',
      title: 'UI DEVELOPER',
      summary: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't  even slightly believable.",
    },
    {
      src: './assets/img/users/4.jpg',
      name: 'Samantha Paul',
      title: 'UI DEVELOPER',
      summary: 'If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem generators on the Internet to repeat Various versions have evolved over the years.',
    },
    {
      src: './assets/img/users/5.jpg',
      name: 'Pope Johnson',
      title: 'UI DEVELOPER',
      summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestias, inventore incidunt aliquid amet nihil exercitationem, modi possimus molestiae assumenda.',
    },
  ];
}
