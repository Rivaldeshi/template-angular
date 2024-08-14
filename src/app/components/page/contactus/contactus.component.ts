import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent {
  
  constructor() {
    document.querySelector('#maincontent')?.classList.remove('main-content');
  }

  ngOnDestroy() {
    document.querySelector('#maincontent')?.classList.add('main-content');
  }
}
