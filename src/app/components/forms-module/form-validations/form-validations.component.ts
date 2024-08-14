import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.scss'],
})
export class FormValidationsComponent {
 
  datePickerConfig = {
    format: 'DD-MM-YY',
  };

  updateFormat() {
    this.datePickerConfig = {
      ...this.datePickerConfig,
      format: 'DD-MM-YY',
    };
  }

  public customForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      agreement: [false, Validators.requiredTrue],
    });
  }
  Submit() {
    if (this.customForm.valid) {
      // Form is valid, handle the form submission here
      console.log('Form submitted successfully!');
    } else {
      // Form is invalid, display error messages or handle accordingly
      console.log('Form is invalid!');
    }
  }
}
