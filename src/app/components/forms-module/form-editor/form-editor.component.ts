import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Editor, Toolbar, Validators } from 'ngx-editor';
  import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
})
export class FormEditorComponent {
  constructor(private formBuilder: FormBuilder) {
    this.editorContent = this.formBuilder.group({});
  }

  ngOnInit() {
    this.editor = new Editor();
  }

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
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form: any = new FormGroup({
    editorContent: new FormControl(
      { value: 'Hello World', disabled: false },
      Validators.required()
    ),
  });

  get doc(): AbstractControl {
    return this.form.get('editorContent');
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

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

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
}
