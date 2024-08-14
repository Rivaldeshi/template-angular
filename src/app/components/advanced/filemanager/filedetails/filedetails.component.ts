import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  Image,
  ModalGalleryService,
  ModalGalleryRef,
  PlainLibConfig,
  PlainGalleryStrategy,
  LineLayout,
} from '@ks89/angular-modal-gallery';
import { fromEvent } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-filedetails',
  templateUrl: './filedetails.component.html',
  styleUrls: ['./filedetails.component.scss'],
})
export class FiledetailsComponent {
  customOptions: OwlOptions = {
    loop: true,
    rtl: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 2000,
    navText: ['<', '>'],
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 3,
      },
      768: {
        items: 3,
      },
      900: {
        items: 4,
      },
    },
    nav: false,
  };

  slidesStore = [
    {
      id: '1',
      src: './assets/img/files/9.png',
      alt: 'img',
      title: 'projects.doc',
      size: '120kb',
    },
    {
      id: '2',
      src: './assets/img/files/2.png',
      alt: 'img',
      size: '120kb',
      title: 'projects.pdf',
    },
    {
      id: '3',
      src: './assets/img/files/3.png',
      alt: 'img',
      size: '120kb',
      title: 'projects.png',
    },
    {
      id: '4',
      src: './assets/img/files/5.png',
      alt: 'img',
      size: '120kb',
      title: 'projects',
    },
    {
      id: '5',
      src: './assets/img/files/3.png',
      alt: 'img',
      size: '120kb',
      title: 'projects.png',
    },
    {
      id: '6',
      src: './assets/img/files/5.png',
      alt: 'img',
      size: '120kb',
      title: 'projects',
    },
  ];
  
  constructor(
    private modalGalleryService: ModalGalleryService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    const ltr = document.querySelectorAll('#switcher-ltr');
    const rtl = document.querySelectorAll('#switcher-rtl');
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

  emptyImagesArray: Image[] = [];
  imageData: any;

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
  libConfigPlainGalleryRow: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout(
        { width: '80px', height: '80px' },
        { length: 8, wrap: true },
        'flex-start'
      ),
    },
  };

  onShow(id: number, index: number, images: Image[] = this.imagesRect): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index],
    }) as ModalGalleryRef;
  }
  thumbsSwiper: unknown;
  setThumbsSwiper(swiper: unknown) {
    this.thumbsSwiper = swiper;
  }

  controlledSwiper: any;
  setControlledSwiper(swiper: any) {
    this.controlledSwiper = swiper;
  }
}
