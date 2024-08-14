import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cover2',
  templateUrl: './cover2.component.html',
  styleUrls: ['./cover2.component.scss']
})
export class Cover2Component {
  constructor(@Inject(DOCUMENT) private document: Document,
  private elementRef: ElementRef,
  private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'h-full');
    this.renderer.addClass(this.document.body, '!py-0');
    this.renderer.addClass(this.document.body, 'bg-white');
    this.renderer.addClass(this.document.body, 'dark:bg-bgdark');

     const authe : any = document.querySelector('.auth');
     authe.setAttribute('class','h-full');
    
    const html : any = this.elementRef.nativeElement.ownerDocument.documentElement;
    html.removeAttribute('data-header-styles', 'dark');
    html.setAttribute('data-menu-styles','dark');
    html.removeAttribute('data-nav-layout','vertical');
    html.classList.add('h-full', 'light');
      if (localStorage.getItem('synto-header-mode') == 'dark') {
        const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
        html.classList.add('h-full', 'dark');
      }

  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'h-full');
    this.renderer.removeClass(this.document.body, '!py-0');
    this.renderer.removeClass(this.document.body, 'bg-white');
    this.renderer.removeClass(this.document.body, 'dark:bg-bgdark');
  const authe: any = document.querySelector('.h-full');
    authe.removeAttribute('class', 'h-full');
     if (localStorage.getItem('synto-header-mode') == 'dark') {
      const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
      html.classList.remove('h-full', 'dark');
    }

}
}
