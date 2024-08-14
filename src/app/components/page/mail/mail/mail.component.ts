import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent {

  isSelected = false;

  selectAll(event: Event): void {
    this.isSelected = (event.target as HTMLInputElement).checked;
  }

  @ViewChild('.minmodal') minmodal!: ElementRef;
  @ViewChild('.btn-bcc') btnBcc!: ElementRef;
  @ViewChild('.btn-cc') btnCc!: ElementRef;
  @ViewChild('.btn-cc-bcc') btnCcBcc!: ElementRef;
  @ViewChild('.mail-cc') mailCc!: ElementRef;
  @ViewChild('.mail-bcc') mailBcc!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

   minscreentoggle() {
     document.querySelector('.minmodal')?.classList.toggle('mail-minscreen');
   }
  
   maxscreentoggle() {
     document.querySelector('.minmodal')?.classList.toggle('mail-fullscreen');
   }
   CCinputtoggle() {
     document.querySelector('.btn-bcc')?.classList.add('hidden');
     document.querySelector('.btn-cc')?.classList.add('hidden');
     document.querySelector('.mail-cc')?.classList.remove('hidden');
   }
   BCCinputtoggle() {
     document.querySelector('.btn-cc-bcc')?.classList.add('hidden');
     document.querySelector('.mail-bcc')?.classList.remove('hidden');
   }
}
