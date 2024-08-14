import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent {
  constructor() {
    document.querySelector('#maincontent')?.classList.remove('main-content');
  }

  ngOnDestroy() {
    document.querySelector('#maincontent')?.classList.add('main-content');
  }
}
