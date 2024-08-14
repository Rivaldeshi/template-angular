import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'authentication-page');
    const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
    html.removeAttribute('data-header-styles', 'light');
    html.removeAttribute('data-nav-layout', 'vertical');
    html.classList.add('h-full', 'light');
   if (localStorage.getItem('synto-header-mode') == 'dark') {
     const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
     html.classList.add('h-full', 'dark');
   }
  }

   // Use @ViewChild to get references to the input elements in the template
  @ViewChild('oneInput') oneInput!: ElementRef<HTMLInputElement>;
  @ViewChild('twoInput') twoInput!: ElementRef<HTMLInputElement>;
  @ViewChild('threeInput') threeInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fourInput') fourInput!: ElementRef<HTMLInputElement>;

  // Automatically move the focus to the next input field after entering a digit
  onDigitInput(event: KeyboardEvent, nextInput: HTMLInputElement | null): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length > 0) {
      // If a digit is entered, move the focus to the next input field
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'authentication-page');
    if (localStorage.getItem('synto-header-mode') == 'dark') {
      const html: any = this.elementRef.nativeElement.ownerDocument.documentElement;
      html.classList.remove('h-full', 'dark');
    }
  }
}
