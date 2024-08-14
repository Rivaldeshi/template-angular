import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Editor, Toolbar, Validators } from 'ngx-editor';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
} from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
]);
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
})
export class EditBlogComponent {
  // ngx-editor
  public editorContent!: FormGroup;
  editordoc = '';
  public editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  selectedCategory = [3];
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Architecture' },
    { id: 3, name: 'Flowers' },
    { id: 4, name: 'Bussines' },
    { id: 5, name: 'LifeStyle' },
    { id: 6, name: 'RealeState' },
    { id: 5, name: 'Nature' },
    { id: 6, name: 'Health' },
  ];
  selectedCategory1 = [3];
  categories1 = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Architecture' },
    { id: 3, name: 'Flowers' },
    { id: 4, name: 'Bussines' },
    { id: 5, name: 'LifeStyle' },
    { id: 6, name: 'RealeState' },
    { id: 5, name: 'Nature' },
    { id: 6, name: 'Health' },
  ];

  form: any = new FormGroup({
    editorContent: new FormControl(
      { value: '', disabled: false },
      Validators.required()
    ),
  });

  get doc(): AbstractControl {
    return this.form.get('editorContent');
  }

  ngOnInit() {
    this.editor = new Editor();
  }

  constructor(private formBuilder: FormBuilder) {
    this.editorContent = this.formBuilder.group({});
  }
  files: File[] = [];

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  indexNumber = 1;

  thumbsSwiper: unknown;

  setThumbsSwiper(swiper: unknown) {
    this.thumbsSwiper = swiper;
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };

  imageData = [
    {
      src: './assets/img/gallery/4.jpg',
      text: 'The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.',
      date: '12,Dec 2022 - 04:34PM',
      name: 'Json Taylor -',
      text2: 'N.A.S.A',
    },
    {
      src: './assets/img/gallery/5.jpg',
      text: 'The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.',
      date: '12,Dec 2022 - 04:34PM',
      name: 'Json Taylor -',
      text2: 'N.A.S.A',
    },
    {
      src: './assets/img/gallery/6.jpg',
      text: 'The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.',
      date: '12,Dec 2022 - 04:34PM',
      name: 'Json Taylor -',
      text2: 'N.A.S.A',
    },
  ];
}
