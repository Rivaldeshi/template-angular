import { Component } from '@angular/core';
import {
  LineLayout,
  ModalGalleryRef,
  ModalGalleryService,
  PlainGalleryStrategy,
  PlainLibConfig,
  Image,
} from '@ks89/angular-modal-gallery';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  url1 = '';
  onSelectFile1(event: any) {
    if (event.target && event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data URL

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url1 = event.target.result;
      };
    }
  }

  url2 = '';
  onSelectFile2(event: any) {
    if (event.target && event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data URL

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url2 = event.target.result;
      };
    }
  }

  items!: GalleryItem[];

  imageData = data;
  constructor(
    public gallery: Gallery,
    private modalGalleryService: ModalGalleryService
  ) {
    document.querySelector('#maincontent')?.classList.remove('main-content');
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

  ngOnInit(): void {
    // Creat gallery items
    this.items = this.imageData.map(
      (item: { srcUrl: any; previewUrl: any }) =>
        new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }
  ngOnDestroy() {
    document.querySelector('#maincontent')?.classList.add('main-content');
  }
}
const data = [
  {
    srcUrl: './assets/img/gallery/1.jpg',
    previewUrl: './assets/img/gallery/1.jpg',
  },
  {
    srcUrl: './assets/img/gallery/2.jpg',
    previewUrl: './assets/img/gallery/2.jpg',
  },
  {
    srcUrl: './assets/img/gallery/3.jpg',
    previewUrl: './assets/img/gallery/3.jpg',
  },
  {
    srcUrl: './assets/img/gallery/4.jpg',
    previewUrl: './assets/img/gallery/4.jpg',
  },
  {
    srcUrl: './assets/img/gallery/5.jpg',
    previewUrl: './assets/img/gallery/5.jpg',
  },
  {
    srcUrl: './assets/img/gallery/6.jpg',
    previewUrl: './assets/img/gallery/6.jpg',
  },
  {
    srcUrl: './assets/img/gallery/7.jpg',
    previewUrl: './assets/img/gallery/7.jpg',
  },
  {
    srcUrl: './assets/img/gallery/8.jpg',
    previewUrl: './assets/img/gallery/8.jpg',
  },
  {
    srcUrl: './assets/img/gallery/10.jpg',
    previewUrl: './assets/img/gallery/10.jpg',
  },
];
