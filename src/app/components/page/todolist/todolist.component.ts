import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  isSelected = false;

  selectAll(event: Event): void {
    this.isSelected = (event.target as HTMLInputElement).checked;
  }
}
