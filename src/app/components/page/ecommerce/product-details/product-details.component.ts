import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from 'keen-slider';
import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';

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

interface image {
  src: string;
  id: string;
}

//keen slider
function ThumbnailPlugin(main: KeenSliderInstance): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          main.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      addActive(slider.track.details.rel);
      addClickEvents();
      main.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
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
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  currentRate = 4;
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  @ViewChild('thumbnailRef') thumbnailRef!: ElementRef<HTMLElement>;

  slider!: KeenSliderInstance;
  thumbnailSlider!: KeenSliderInstance;
  public currentSlide = 1;

  thumbsSwiper: any;
  setThumbsSwiper(swiper: string) {
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

  slidesEx = ['first', 'second'];

  onSlideChange(swiper: any) {}

  constructor() {}

  public data: any;
  public posts: any;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.slider = new KeenSlider(
      this.sliderRef.nativeElement,
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout: any;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 2000);
          }
          slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener('mouseout', () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on('dragStarted', clearNextTimeout);
          slider.on('animationEnded', nextTimeout);
          slider.on('updated', nextTimeout);
        },
      ]
    );
    setTimeout(() => {
      (this.slider = new KeenSlider(this.sliderRef.nativeElement)),
        {
          initial: this.currentSlide,
          slideChanged: (s: any) => {
            this.currentSlide = s.track.details.rel;
          },
        };
      this.thumbnailSlider = new KeenSlider(
        this.thumbnailRef.nativeElement,
        {
          loop: true,
          initial: 0,
          slides: {
            perView: 4,
            spacing: 10,
          },
        },
        [ThumbnailPlugin(this.slider)]
      );
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
    if (this.thumbnailSlider) this.thumbnailSlider.destroy();
  }

  input = 1;
  minus() {
    this.input++;
  }
  plus = () => {
    if (this.input > 0) {
      this.input--;
    }
  };
  click = (id: string) => {
    const data = this.data.filter((x: { id: any }) => {
      return x.id != id;
    });
    this.data = data;
  };

  name = 'Angular ' + VERSION.major;

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  slidesStore = [
    {
      id: 'product-image-1',
      src: './assets/img/ecommerce/product-details/1.png',
    },
    {
      id: 'product-image-2',

      src: './assets/img/ecommerce/product-details/2.png',
    },
    {
      id: 'product-image-3',

      src: './assets/img/ecommerce/product-details/3.png',
    },
    {
      id: 'product-image-4',

      src: './assets/img/ecommerce/product-details/4.png',
    },
    {
      id: 'product-image-5',

      src: './assets/img/ecommerce/product-details/5.png',
    },
    {
      id: 'product-image-6',

      src: './assets/img/ecommerce/product-details/6.png',
    },
    {
      id: 'product-image-7',

      src: './assets/img/ecommerce/product-details/7.png',
    },
    {
      id: 'product-image-8',

      src: './assets/img/ecommerce/product-details/8.png',
    },
  ];
  imageData = [
    {
      id: 'product-image-1',
      src: './assets/img/ecommerce/product-details/1.png',
    },
    {
      id: 'product-image-1',

      src: './assets/img/ecommerce/product-details/2.png',
    },
    {
      id: 'product-image-1',

      src: './assets/img/ecommerce/product-details/3.png',
    },
    {
      id: 'product-image-1',

      src: './assets/img/ecommerce/product-details/4.png',
    },
    {
      id: 'product-image-1',

      src: './assets/img/ecommerce/product-details/5.png',
    },
    {
      id: 'product-image-1',

      src: './assets/img/ecommerce/product-details/6.png',
    },
    {
      id: 'product-image-1',

      src: './assets/img/ecommerce/product-details/7.png',
    },
    {
      id: 'product-image-1',

      src: './assets/img/ecommerce/product-details/8.png',
    },
  ];
}
