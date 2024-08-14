import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {
  constructor(@Inject(DOCUMENT) private document: Document,
  private elementRef: ElementRef,
  private renderer: Renderer2,) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, "cover1");
    this.renderer.addClass(this.document.body,"justify-center");

    const html : any = this.elementRef.nativeElement.ownerDocument.documentElement;
    html.removeAttribute('data-header-styles', 'dark');
    html.removeAttribute('data-nav-layout', 'vertical');
       html.setAttribute('data-menu-styles', 'dark');
   if (localStorage.getItem('synto-header-mode') == 'dark') {
     const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
     html.classList.add('h-full', 'dark');
   }
    
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, "cover1");
    this.renderer.removeClass(this.document.body, "justify-center");
      if (localStorage.getItem('synto-header-mode') == 'dark') {
        const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
        html.classList.remove('h-full', 'dark');
      }

}
}
