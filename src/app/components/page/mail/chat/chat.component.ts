import { Component, ElementRef, Renderer2 } from '@angular/core';

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
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  thumbsSwiper: unknown;
  setThumbsSwiper(swiper: unknown) {
    this.thumbsSwiper = swiper;
  }

  breakpoints = {
    480: { slidesPerView: 1, spaceBetween: 30 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };

  imageData = [
    {
      src: './assets/img/users/2.jpg',
    },
    {
      src: './assets/img/users/3.jpg',
    },
    {
      src: './assets/img/users/4.jpg',
    },
    {
      src: './assets/img/users/19.jpg',
    },
    {
      src: './assets/img/users/18.jpg',
    },
    {
      src: './assets/img/users/17.jpg',
    },
    {
      src: './assets/img/users/16.jpg',
    },
    {
      src: './assets/img/users/15.jpg',
    },
    {
      src: './assets/img/users/14.jpg',
    },
    {
      src: './assets/img/users/13.jpg',
    },
    {
      src: './assets/img/users/12.jpg',
    },
    {
      src: './assets/img/users/3.jpg',
    },
    {
      src: './assets/img/users/4.jpg',
    },
    {
      src: './assets/img/users/15.jpg',
    },
    {
      src: './assets/img/users/14.jpg',
    },
    {
      src: './assets/img/users/15.jpg',
    },
    {
      src: './assets/img/users/14.jpg',
    },
  ];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  handleClick(Dataname:any): void {
    const element = this.elementRef.nativeElement.querySelector(
      '.main-chart-wrapper'
    );
    const name = Dataname;
    const img = '2';
    const status = 'online';
    this.changeTheInfo(element, name, img, status);
  }

  changeTheInfo(
    element: HTMLElement,
    name: string,
    img: string,
    status: string
  ): void {
    const activeElements =
      this.elementRef.nativeElement.querySelectorAll('.checkforactive');
    activeElements.forEach((ele: HTMLElement) => {
      this.renderer.removeClass(ele, 'active');
    });

    // Add 'active' class to the closest 'li' element of the provided element
    const closestLi = element?.closest('li'); // Add null check here
    if (closestLi) {
      this.renderer.addClass(closestLi, 'active');
    }

    const chatNameElements =
      this.elementRef.nativeElement.querySelectorAll('.chatnameperson');
    chatNameElements.forEach((ele: HTMLElement) => {
      ele.innerText = name;
    });

    const image = `./assets/img/users/${img}.jpg`;
    const chatImageElements =
      this.elementRef.nativeElement.querySelectorAll('.chatimageperson');
    chatImageElements.forEach((ele: HTMLImageElement) => {
      ele.src = image;
    });

    const chatStatusElements =
      this.elementRef.nativeElement.querySelectorAll('.chatstatusperson');
    chatStatusElements.forEach((ele: HTMLElement) => {
      this.renderer.removeClass(ele, 'online');
      this.renderer.removeClass(ele, 'offline');
      this.renderer.addClass(ele, status);
    });

    const chatPersonStatus =
      this.elementRef.nativeElement.querySelector('.chatpersonstatus');
    if (chatPersonStatus) {
      chatPersonStatus.innerText = status;
    }

    const mainChartWrapper = this.elementRef.nativeElement.querySelector(
      '.main-chart-wrapper'
    );
    this.renderer.addClass(mainChartWrapper, 'responsive-chat-open');
  }

  detailsclick() {
    const detailschat = this.elementRef.nativeElement.querySelector(
      '.chat-user-details '
    );
    this.renderer.addClass(detailschat, 'open');
  }
  removedetails() {
    const detailschat = this.elementRef.nativeElement.querySelector(
      '.chat-user-details '
    );
    this.renderer.removeClass(detailschat, 'open');
  }

  removecard() {
    const element = this.elementRef.nativeElement.querySelector(
      '.main-chart-wrapper'
    );
    this.renderer.removeClass(element, 'responsive-chat-open');
  }

  isActive = false;

  searchclick() {
    this.isActive = !this.isActive;
  }

  ngOnDestroy(): void {
    this.removecard();
    this.removedetails();
    this.detailsclick();
  }
}
