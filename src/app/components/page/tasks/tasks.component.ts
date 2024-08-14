import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  startDate = new Date(1990, 0, 1);
  groupDropdown: any = [];
  GroupOption = [];
  groupSettings = {};

  selectedChoices: any;
  choices: any[] = [];
  ChoicesList1 = [
    'Choice 1',
    'Choice 2',
    'Choice 3',
    'Choice 4',
    'Choice 5',
    'Choice 6',
  ];
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.ChoicesList1.forEach((c: any, i: any) => {
      this.choices.push({ id: i, name: c });
    });
  }
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

  col1 = [
    ` <div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/4.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      Zanex Laravel Project
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>05-12-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Justo kasd duo sanctus et elitr et, sed diam clita lorem sed
                  eirmod, clita labore tempor et sanctus et ipsum stet, eos.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1 m-1"
                  >
                    Admin
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-black/20 hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1 m-1"
                  >
                    Design
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-black/20 hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-danger text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 20%"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>20%</span>
                </p>
              </div>
              <div class="sm:flex">
                <span
                  class="badge bg-success/10 text-success rounded-sm sm:mb-0"
                >
                  Low
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm sm:mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex sm:space-y-0 space-y-2">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>2</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>4</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>5</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/15.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/4.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/13.jpg"
                    alt="Image Description"
                  />
                  <span
                    class="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10"
                  >
                    <span
                      class="font-medium text-gray-500 leading-none dark:text-white/70"
                      >4+</span
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>`,
    ` <div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/2.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      Tailwind Ui Web Application
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>20-09-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Justo kasd duo sanctus et elitr et, sed diam clita lorem sed
                  eirmod, clita labore tempor et sanctus et ipsum stet, eos.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Tailwind
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Design
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-danger text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 30%"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>30%</span>
                </p>
              </div>
              <div class="sm:flex">
                <span class="badge bg-danger/10 text-danger rounded-sm sm:mb-0">
                  High
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm sm:mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex sm:space-y-0 space-y-2">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>4</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>3</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>2</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>
          </div>`,
    ` <div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/9.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      Spruha Vue Project
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>28-10-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Justo kasd duo sanctus et elitr et, sed diam clita lorem sed
                  eirmod, clita labore tempor et sanctus et ipsum stet, eos.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Vue
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Developing
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-danger text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 10%"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>10%</span>
                </p>
              </div>
              <div class="sm:flex">
                <span
                  class="badge bg-warning/10 text-warning rounded-sm sm:mb-0"
                >
                  Medium
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm sm:mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex sm:space-y-0 space-y-2">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>2</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>1</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>3</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/15.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/19.jpg"
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>
          </div>`,
  ];

  col2 = [
    ` <div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/1.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      Server side validation
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>20-10-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Justo kasd duo sanctus et elitr et, sed diam clita lorem sed
                  eirmod, clita labore tempor et sanctus et ipsum stet, eos.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Angular
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Developing
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-info text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 40%"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>40%</span>
                </p>
              </div>
              <div class="sm:flex space-y-2 sm:space-y-0">
                <span class="badge bg-warning/10 text-warning rounded-sm mb-0">
                  Medium
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex space-y-2 sm:space-y-0">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>2</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>1</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>3</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/15.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/19.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/20.jpg"
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>
          </div>`,
    ` <div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/3.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      Designing Landing Page
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>20-10-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Justo kasd duo sanctus et elitr et, sed diam clita lorem sed
                  eirmod, clita labore tempor et sanctus et ipsum stet, eos.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Angular
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Developing
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-info text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 50%"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>50%</span>
                </p>
              </div>
              <div class="sm:flex space-y-2 sm:space-y-0">
                <span class="badge bg-success/10 text-success rounded-sm mb-0">
                  Low
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex space-y-2 sm:space-y-0">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>2</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>1</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>3</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/15.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/19.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/20.jpg"
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>
          </div>`,
    `<div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/5.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      New Project Blueprint
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>30-11-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Justo kasd duo sanctus et elitr et, sed diam clita lorem sed
                  eirmod, clita labore tempor et sanctus et ipsum stet, eos.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Angular
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Developing
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-info text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 30%"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>30%</span>
                </p>
              </div>
              <div class="sm:flex space-y-2 sm:space-y-0">
                <span class="badge bg-info/10 text-info rounded-sm mb-0">
                  Critical
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex space-y-2 sm:space-y-0">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>2</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>1</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>3</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/15.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/19.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/20.jpg"
                    alt="Image Description"
                  /><span
                    class="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10"
                  >
                    <span
                      class="font-medium text-gray-500 leading-none dark:text-white/70"
                      >2+</span
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>`,
    ` <div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/6.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      New Plugin Development
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>30-11-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Justo kasd duo sanctus et elitr et, sed diam clita lorem sed
                  eirmod, clita labore tempor et sanctus et ipsum stet, eos.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    React
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Developing
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-info text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 60%"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>60%</span>
                </p>
              </div>
              <div class="sm:flex space-y-2 sm:space-y-0">
                <span class="badge bg-danger/10 text-danger rounded-sm mb-0">
                  High
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex space-y-2 sm:space-y-0">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>2</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>1</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>3</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/15.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/19.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/20.jpg"
                    alt="Image Description"
                  /><span
                    class="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10"
                  >
                    <span
                      class="font-medium text-gray-500 leading-none dark:text-white/70"
                      >10+</span
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>`,
  ];

  col3 = [
    `<div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/7.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      Designing New Authentication Pages
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>30-11-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Justo kasd duo sanctus et elitr et, sed diam clita lorem sed
                  eirmod, clita labore tempor et sanctus et ipsum stet, eos.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    React
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Developing
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-warning text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 40%"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>40%</span>
                </p>
              </div>
              <div class="sm:flex space-y-2 sm:space-y-0">
                <span class="badge bg-danger/10 text-danger rounded-sm mb-0">
                  High
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex space-y-2 sm:space-y-0">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>2</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>1</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>3</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/15.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/19.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/20.jpg"
                    alt="Image Description"
                  /><span
                    class="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10"
                  >
                    <span
                      class="font-medium text-gray-500 leading-none dark:text-white/70"
                      >15+</span
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>`,
    ` <div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/8.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      Designing New Authentication Pages
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>30-11-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Justo kasd duo sanctus et elitr et, sed diam clita lorem sed
                  eirmod, clita labore tempor et sanctus et ipsum stet, eos.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Laravel
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Developing
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-warning text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 60%"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>60%</span>
                </p>
              </div>
              <div class="sm:flex space-y-2 sm:space-y-0">
                <span class="badge bg-warning/10 text-warning rounded-sm mb-0">
                  Medium
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex space-y-2 sm:space-y-0">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>2</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>1</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>3</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/6.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/2.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/20.jpg"
                    alt="Image Description"
                  /><span
                    class="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10"
                  >
                    <span
                      class="font-medium text-gray-500 leading-none dark:text-white/70"
                      >5+</span
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>`,
  ];
  col4 = [
    `  <div class="box task-box">
            <div class="box-body space-y-4">
              <div class="flex">
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <img
                    src="./assets/img/logos/10.png"
                    class="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"
                    alt="logo"
                  />
                  <div class="my-auto hidden sm:block">
                    <h5 class="text-base font-semibold w-44 truncate">
                      Documentation For New Template
                    </h5>
                    <p
                      class="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"
                    >
                      <i class="ri-calendar-line"></i><span>15-11-2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil adipisci tempora minus quaerat, rem eum, corporis at,
                  dolor provident id quia similique corrupti sit? Tenetur
                  obcaecati voluptas placeat? Alias, voluptatibus?.
                </p>
                <div>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Html
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                  <span
                    class="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 m-1"
                  >
                    Developing
                    <button
                      aria-label="button"
                      type="button"
                      class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500"
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                  <div
                    class="ti-main-progress-bar bg-success text-[8px] text-white text-center"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  class="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"
                >
                  <span>100%</span>
                </p>
              </div>
              <div class="sm:flex space-y-2 sm:space-y-0">
                <span class="badge bg-danger/10 text-danger rounded-sm mb-0">
                  High
                </span>
                <span
                  class="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0"
                >
                  Due Date: 25-12-2022
                </span>
              </div>
            </div>
            <div class="box-footer">
              <div class="sm:flex space-y-2 sm:space-y-0">
                <div class="font-medium space-x-1 rtl:space-x-reverse my-auto">
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-attachment-line"></i><span>2</span></a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-chat-2-line"></i><span>1</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-xs leading-[0] text-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark inline-flex p-3"
                    ><i class="ri-eye-line"></i><span>3</span></a
                  >
                </div>
                <div
                  class="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto"
                >
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/6.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/3.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/2.jpg"
                    alt="Image Description"
                  />
                  <img
                    class="avatar w-6 h-6 rounded-full"
                    src="./assets/img/users/20.jpg"
                    alt="Image Description"
                  /><span
                    class="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10"
                  >
                    <span
                      class="font-medium text-gray-500 leading-none dark:text-white/70"
                      >2+</span
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>`,
  ];
}
