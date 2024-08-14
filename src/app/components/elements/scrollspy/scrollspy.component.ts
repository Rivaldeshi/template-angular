import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrollspy',
  templateUrl: './scrollspy.component.html',
  styleUrls: ['./scrollspy.component.scss'],
})
export class ScrollspyComponent {
  activeButtonIndex = -1;
  activeDropdownIndex = -1;
  isDropdownOpen = false;
  activeButtonIndex1 = -1;
  activeDropdownIndex1 = -1;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  scroll(element: HTMLElement, index: number, dropdownIndex: number) {
    element.scrollIntoView({ behavior: 'smooth' });
    this.activeButtonIndex = index;
    this.activeDropdownIndex = dropdownIndex;
  }

  Nestedscroll(element: HTMLElement, index1: number, dropdownIndex1?: number) {
    element.scrollIntoView({ behavior: 'smooth' });
    this.activeButtonIndex1 = index1;
    this.activeDropdownIndex1 = dropdownIndex1 !== undefined ? dropdownIndex1 : -1;
  }

  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }
}
