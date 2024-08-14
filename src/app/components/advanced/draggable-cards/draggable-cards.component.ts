import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-draggable-cards',
  templateUrl: './draggable-cards.component.html',
  styleUrls: ['./draggable-cards.component.scss'],
})
export class DraggableCardsComponent implements OnInit {
  col1 = [
    `<div class="box mb-0">
                    <div class="box-body">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                  </div>`,
    `<div class="box mb-0 !bg-primary text-white">
                    <div class="box-body">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                  </div>`,
    `<div class="box mb-0">
                    <img class="w-full h-auto rounded-t-sm" src="./assets/img/gallery/3.jpg" alt="Image Description">
                    <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                            Card title
                        </h3>
                        <p class="mt-1 text-gray-800 dark:text-white/70">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                        </p>
                        <a class="mt-3 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10" href="javascript:void(0);">
                            Go somewhere
                        </a>
                    </div>
                  </div>`,
    `<div class="box mb-0 !bg-success text-white">
                    <div class="box-body">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                  </div>`,
  ];
  col2 = [
    `<div class="box mb-0 !bg-primary text-white">
                    <div class="box-body">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                  </div>`,
    `<div class="box mb-0">
                    <div class="box-body">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                  </div>`,
    `<div class="box mb-0 !bg-warning text-white">
                    <div class="box-body">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                  </div>`,
    `<div class="box mb-0">
                    <img class="w-full h-auto rounded-t-sm" src="./assets/img/gallery/3.jpg" alt="Image Description">
                    <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                            Card title
                        </h3>
                        <p class="mt-1 text-gray-800 dark:text-white/70">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                        </p>
                        <a class="mt-3 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10" href="javascript:void(0);">
                            Go somewhere
                        </a>
                    </div>
                  </div>`,
  ];
  col3 = [
    `<div class="box !bg-secondary text-white mb-0">
                    <div class="box-body">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                  </div>`,
    `<div class="box mb-0 !bg-info text-white">
                    <div class="box-body">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                  </div>`,
    `<div class="box mb-0 !bg-danger text-white">
                    <div class="box-body">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                  </div>`,
    `<div class="box mb-0">
                    <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                            Card title
                        </h3>
                        <p class="mt-1 text-gray-800 dark:text-white/70">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                        </p>
                        <a class="mt-3 py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10" href="javascript:void(0);">
                            Go somewhere
                        </a>
                    </div>
                    <img class="w-full h-auto rounded-b-sm" src="./assets/img/gallery/3.jpg" alt="Image Description">
                  </div>`,
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}
