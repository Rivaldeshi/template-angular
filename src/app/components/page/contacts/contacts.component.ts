import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  url = '';
  onSelectFile(event: any) {
    if (event.target && event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data URL

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url1 = event.target.result;
      };
    }
  }

  url1 = '';
  onSelectFile2(event: any) {
    if (event.target && event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data URL

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

}
