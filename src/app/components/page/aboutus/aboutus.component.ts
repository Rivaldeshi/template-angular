import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderHooks, KeenSliderInstance } from 'keen-slider';
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
  selector: 'app-aboutus',  
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent {
  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>;

  slider: KeenSliderInstance<object, object, KeenSliderHooks> | null = null;

  constructor() {
    document.querySelector('#maincontent')?.classList.remove('main-content');
  }

  ngAfterViewInit() {
    if (this.sliderRef && this.sliderRef.nativeElement) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        mode: 'free',
        slides: {
          perView: 4,
          spacing: 10,
        },
      });

      this.slider.on('created', () => {
        setInterval(() => {
          this.slider?.next();
        }, 5000); // Adjust autoplay duration (in milliseconds)
      });
    }
  }

  ngOnDestroy() {
    document.querySelector('#maincontent')?.classList.add('main-content');
    if (this.slider) this.slider.destroy();
  }
  sliderOptions: any = {
    slidesPerView: 3, // Default number of slides per view
    breakpoints: {
      600: {
        slidesPerView: 1, // Number of slides per view for screens below 600px width
      },
      900: {
        slidesPerView: 2, // Number of slides per view for screens below 900px width
      },
    },
  };
  // ngx owl carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
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
        items: 2,
      },
      740: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  slidesStore = [
    {
      id: '1',
      src: './assets/img/users/2.jpg',
      title: 'UI Developer',
      summary:
        'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo.',
      name: 'Socrates Itumay',
    },

    {
      id: '2',
      src: './assets/img/users/12.jpg',
      title: 'UI Developer',
      summary:
        'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo.',
      name: 'Socrates Itumay',
    },

    {
      id: '3',
      src: './assets/img/users/10.jpg',
      title: 'UI Developer',
      summary:
        'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo.',
      name: 'Socrates Itumay',
    },

    {
      id: '4',
      src: './assets/img/users/13.jpg',
      title: 'UI Developer',
      summary:
        'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo.',
      name: 'Socrates Itumay',
    },
    {
      id: '5',
      src: './assets/img/users/11.jpg',
      title: 'UI Developer',
      summary:
        'Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo.',
      name: 'Socrates Itumay',
    },
  ];
}
