
import { Component } from '@angular/core';
import { validColorValidator } from 'ngx-colors';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-advanced-forms',
  templateUrl: './advanced-forms.component.html',
  styleUrls: ['./advanced-forms.component.scss'],
})
export class AdvancedFormsComponent {
  public color11 = '#f2ff00';
  public grayColor = '#b7b7b7';
  public color = `#f2ff00`;
  public color1 = `#a68e5e`;

  selected: any;

  datePickerConfig = {
    format: 'DD-MM-YY',
  };

  updateFormat() {
    this.datePickerConfig = {
      ...this.datePickerConfig,
      format: 'DD-MM-YY',
    };
  }

  
  public exampleForm: FormGroup = new FormGroup(
    {
      inputCtrl: new FormControl("rgb(79, 195, 255)", validColorValidator()),
      pickerCtrl: new FormControl("rgb(79, 195, 255)"),
    },
    { updateOn: "change" }
  );


  constructor() {}

  ngOnInit() {
    this.exampleForm.controls["inputCtrl"].valueChanges.subscribe((color) => {
      if (this.exampleForm.controls["pickerCtrl"].valid) {
        this.exampleForm.controls["pickerCtrl"].setValue(color, {
          emitEvent: false,
        });
      }
    });
    this.exampleForm.controls["pickerCtrl"].valueChanges.subscribe((color) =>
      this.exampleForm.controls["inputCtrl"].setValue(color, {
        emitEvent: false,
      })
    );
  }
}
