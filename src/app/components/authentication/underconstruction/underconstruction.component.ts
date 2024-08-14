import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-underconstruction',
  templateUrl: './underconstruction.component.html',
  styleUrls: ['./underconstruction.component.scss'],
})
export class UnderconstructionComponent {
  public days: unknown;
  public hours: unknown;
  public minutes: unknown;
  public seconds: unknown;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    const countDown = new Date('Dec 1, 2025 00:00:00').getTime();
    const time = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(time);
      }
    }, 1000);
    this.renderer.addClass(this.document.body, 'h-full');
    this.renderer.addClass(this.document.body, '!py-0');
    this.renderer.addClass(this.document.body, 'bg-white');
    this.renderer.addClass(this.document.body, 'dark:bg-bgdark');

    const authe: any = document.querySelector('.auth');
    authe.setAttribute('class', 'h-full');

    const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
     html.setAttribute('class', 'h-full');
    html.removeAttribute('data-header-styles', 'light');
    html.removeAttribute('data-nav-layout', 'vertical');
    if (localStorage.getItem('synto-header-mode') == 'dark') {
      const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
      html.classList.add('h-full', 'dark');
    }
  }

  ngOnDestroy(): void {
     const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
     html.removeAttribute('class', 'h-full');
    this.renderer.removeClass(this.document.body, '!py-0');
    this.renderer.removeClass(this.document.body, 'bg-white');
    this.renderer.removeClass(this.document.body, 'dark:bg-bgdark');
    if (localStorage.getItem('synto-header-mode') == 'dark') {
      const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
      html.classList.remove('h-full', 'dark');
    }
    const authe: any = document.querySelector('.h-full');
    authe.removeAttribute('class', 'h-full');
  }
}
