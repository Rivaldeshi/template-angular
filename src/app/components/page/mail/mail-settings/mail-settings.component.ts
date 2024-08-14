import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-settings',
  templateUrl: './mail-settings.component.html',
  styleUrls: ['./mail-settings.component.scss'],
})
export class MailSettingsComponent {
  
  url1 = '';
  onSelectFile1(event: any) {
    if (event.target && event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data URL

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url1 = event.target.result;
      };
    }
  }
}
