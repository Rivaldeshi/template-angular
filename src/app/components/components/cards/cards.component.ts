import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  removecard(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }
  toggleClass = 'fe fe-maximize';

  public fullScreen = true;
  
  fullScreenToggle() {
    if (this.toggleClass === 'fe fe-maximize') {
      this.toggleClass = 'fe fe-minimize';
    } else {
      this.toggleClass = 'fe fe-maximize';
    }
  }
}
