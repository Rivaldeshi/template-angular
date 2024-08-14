import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { interval } from 'rxjs';
import * as switcher from 'src/app/shared/components/switcher/switcher';
import { LayoutConfigService } from '../../../shared/services/layout-config.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  public show = false;

  constructor(
    private el: ElementRef,
    private elementRef: ElementRef,
    private viewScroller: ViewportScroller,
    public renderer: Renderer2,
    private configService: LayoutConfigService
  ) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const bodyElement = document.body;
    this.renderer.setAttribute(htmlElement, 'toggled', 'close');
    this.renderer.removeClass(bodyElement, 'sidebar-mini');
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
  }

  primary(type: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    htmlElement.style.setProperty('--color-primary', type);
    htmlElement.style.setProperty('--color-primary-rgb', type);
    localStorage.setItem('synto-primary-mode', type);
  }

  background(type: string, event: string, type1: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;

    this.renderer.setAttribute(htmlElement, 'style', type);
    localStorage.setItem('synto-background-mode', type);

    this.renderer.setAttribute(htmlElement, 'class', event);
    localStorage.setItem('synto-theme-mode', event);

    this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
    localStorage.setItem('synto-header-mode', type1);
  }

  themeChange(type: string, type1: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;

    this.renderer.setAttribute(htmlElement, 'class', type);
    localStorage.setItem('synto-theme-mode', type);

    this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
    localStorage.setItem('synto-header-mode', type1);

    if (localStorage.getItem('synto-header-mode') === type1) {
      this.renderer.removeAttribute(htmlElement, 'style');
    }
  }

  DirectionsChange(type: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'dir', type);
    localStorage.setItem('synto-dir', type);
  }

  toggleSidebar() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const currentToggleValue = htmlElement.getAttribute('toggled');

    if (currentToggleValue !== 'open') {
      this.renderer.setAttribute(htmlElement, 'toggled', 'open');
    } else {
      this.renderer.setAttribute(htmlElement, 'toggled', 'close');
    }
  }

  @ViewChild('dropmenu', { static: true }) dropmenu!: ElementRef;

  bodyclick() {
    this.expande1 = false;
    this.expande2 = false;
    this.expande = false; 
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'toggled', 'close');
  }

  ngOnInit(): void {
    switcher.localStorageBackUp();
    this.CheckOpe();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop;
    sections.forEach((el: any, i: string | number) => {
      const currLink = sections[i];
      const val: any = currLink.getAttribute('value');
      const refElement: any = this.el.nativeElement.querySelector('#' + val);

      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          const activeNav =
            this.el.nativeElement.querySelector('.nav-scroll.active');
          if (activeNav) {
            this.renderer.removeClass(activeNav, 'active');
          }
          this.renderer.addClass(currLink, 'active');
        } else {
          this.renderer.removeClass(currLink, 'active');
        }
      }
    });
  }

  backtotop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }

  ngOnDestroy() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
    this.renderer.removeAttribute(htmlElement, 'toggled');
    this.renderer.setAttribute(htmlElement, 'data-menu-styles', 'dark');
  }

  public localDark = localStorage;
  public localRtl = localStorage;
  public darkchecked: any;
  public RtlChecked: any;

  CheckOpe = () => {
    if (localStorage.getItem('synto-dir') == 'rtl') {
      this.RtlChecked = true;
    }
    if (localStorage.getItem('synto-dir') == 'rtl') {
      this.darkchecked = true;
    }
  };

  reset() {
    localStorage.clear();
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    htmlElement.removeAttribute('style');
    htmlElement.setAttribute('class', 'light');
    htmlElement.setAttribute('dir', 'ltr');
    htmlElement.setAttribute('data-nav-layout', 'horizontal');
    htmlElement.setAttribute('data-page-style', 'regular');
    htmlElement.setAttribute('data-header-styles', 'light');
    htmlElement.setAttribute('data-menu-styles', 'dark');
    htmlElement.setAttribute('bg-img', 'dark');
    htmlElement.removeAttribute('toggled');
    htmlElement.removeAttribute('style');
    // switcher.checkOptions();
     this.toggleExpand();
  }

  expande = false;
  expande1 = false;
  expande2 = false;

 toggleExpand(): void {
    this.expande = !this.expande;   
   if (localStorage.getItem('data-menu-styles') == 'light') {
     document
       .querySelector('html')
       ?.setAttribute('data-menu-styles', 'light');
   } else if (localStorage.getItem('data-menu-styles') == 'dark') {
     document
       .querySelector('html')
       ?.setAttribute('data-menu-styles', 'dark');
   }
  }

  public counter1 = 1;
  source = interval(0.2);
  subscribe = this.source.subscribe(() => {
    this.counter1++;
    if (this.counter1 == 1325) {
      this.subscribe.unsubscribe();
    }
  });

  @Output() outsideClick: EventEmitter<MouseEvent> = new EventEmitter();
}
