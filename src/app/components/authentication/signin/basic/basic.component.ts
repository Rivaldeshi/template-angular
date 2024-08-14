import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  constructor(@Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,
  private renderer: Renderer2,) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, "authentication-page");
    const html : any = this.elementRef.nativeElement.ownerDocument.documentElement;
    html.removeAttribute('data-header-styles', 'light');
    
    html.removeAttribute('data-nav-layout','vertical');
    html.classList.add('h-full', 'light');
    // html.setAttribute('class', 'h-full');
    
    if (localStorage.getItem('synto-header-mode') == 'dark') {
      const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
      html.classList.add('h-full', 'dark');
      // html.setAttribute('class', 'dark');
      // html.setAttribute('class', 'h-full');
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, "authentication-page");
     if (localStorage.getItem('synto-header-mode') == 'dark') {
       const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
       html.classList.remove('h-full', 'dark');
     }
}
}
