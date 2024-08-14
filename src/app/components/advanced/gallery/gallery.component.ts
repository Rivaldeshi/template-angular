import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Image,
  ModalGalleryService,
  ModalGalleryRef,
  PlainLibConfig,
  PlainGalleryStrategy,
  LineLayout,
} from '@ks89/angular-modal-gallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
  customOptions: OwlOptions = {
    loop: true,
    rtl: false,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['<', '>'],
    center: true,
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
      940: {
        items: 6,
      },
    },
    nav: true,
  };
  images!: Image[];

  constructor(
    private modalGalleryService: ModalGalleryService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    const ltr = document.querySelectorAll('#myonoffswitch54');
    const rtl = document.querySelectorAll('#myonoffswitch55');
    fromEvent(ltr, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: false }; // this will make the carousel refresh
    });
    fromEvent(rtl, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh
    });
    if (document.body.classList.contains('rtl')) {
      this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh
    }
  }

  libConfigPlainGalleryRow: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout(
        { width: '80px', height: '80px' },
        { length: 4, wrap: true },
        'flex-start'
      ),
    },
  };

  openImageModalRowDescription(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index],
    }) as ModalGalleryRef;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

  imagesRect: Image[] = [
    new Image(
      0,
      { img: './assets/img/gallery/1.jpg' },
      { img: './assets/img/gallery/1.jpg' }
    ),
    new Image(
      1,
      { img: './assets/img/gallery/2.jpg' },
      { img: './assets/img/gallery/2.jpg' }
    ),
    new Image(
      2,
      { img: './assets/img/gallery/3.jpg' },
      { img: './assets/img/gallery/3.jpg' }
    ),
    new Image(
      3,
      { img: './assets/img/gallery/4.jpg' },
      { img: './assets/img/gallery/4.jpg' }
    ),
    new Image(
      4,
      { img: './assets/img/gallery/5.jpg' },
      { img: './assets/img/gallery/5.jpg' }
    ),
    new Image(
      5,
      { img: './assets/img/gallery/6.jpg' },
      { img: './assets/img/gallery/6.jpg' }
    ),
    new Image(
      6,
      { img: './assets/img/gallery/7.jpg' },
      { img: './assets/img/gallery/7.jpg' }
    ),
    new Image(
      7,
      { img: './assets/img/gallery/8.jpg' },
      { img: './assets/img/gallery/8.jpg' }
    ),
  ];

  imagesRect2: Image[] = [
    new Image(
      0,
      {
        img: './assets/img/gallery/1.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      },
      { img: './assets/img/gallery/1.jpg' }
    ),
    new Image(
      1,
      {
        img: './assets/img/gallery/2.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      },
      {
        img: './assets/img/gallery/2.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      }
    ),
    new Image(
      2,
      {
        img: './assets/img/gallery/3.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      },
      {
        img: './assets/img/gallery/3.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      }
    ),
    new Image(
      3,
      {
        img: './assets/img/gallery/4.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      },
      { img: './assets/img/gallery/4.jpg' }
    ),
    new Image(
      4,
      {
        img: './assets/img/gallery/5.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      },
      {
        img: './assets/img/gallery/5.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      }
    ),
    new Image(
      5,
      {
        img: './assets/img/gallery/6.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      },
      { img: './assets/img/gallery/6.jpg' }
    ),
    new Image(
      6,
      {
        img: './assets/img/gallery/7.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      },
      { img: './assets/img/gallery/7.jpg' }
    ),
    new Image(
      7,
      {
        img: './assets/img/gallery/8.jpg',
        description:
          'Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      },
      { img: './assets/img/gallery/8.jpg' }
    ),
  ];

  imageObject = [
    {
      video: './assets/img/video/gallery-video-1.mp4',
      posterImage: './assets/img/gallery/10.jpg',
      description: 'Image-1',
    },
    {
      video: './assets/img/video/gallery-video-1.mp4',
      posterImage: './assets/img/gallery/9.jpg',
      title: 'Image-2',
    },
    {
      video: './assets/img/video/gallery-video-1.mp4',
      posterImage: './assets/img/gallery/8.jpg',
      title: 'Image-3',
    },
    {
      video: './assets/img/video/gallery-video-1.mp4',
      posterImage: './assets/img/gallery/7.jpg',
      title: 'Image-4',
    },
  ];

  onShow(id: number, index: number, images: Image[] = this.imagesRect): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index],
    }) as ModalGalleryRef;
  }

  onShow2(id: number, index: number, images: Image[] = this.imagesRect2): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index],
    }) as ModalGalleryRef;
  }

  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };

  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  items = [
    {
      id: '1',
      size: '1400-933',
      src: 'https://img.youtube.com/vi/HOYpAgWPTps/0.jpg',
      thumb: 'https://www.youtube.com/embed/HOYpAgWPTps',
    },
    {
      id: '2',
      size: '1400-933',
      src: './assets/img/gallery/10.jpg',
      thumb: './assets/img/video/gallery-video-1.mp4',
    },
    {
      id: '3',
      size: '1400-932',
      src: './assets/img/gallery/10.jpg',
      thumb: './assets/img/video/gallery-video-1.mp4',
    },
  ];
}

