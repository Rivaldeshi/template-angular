import { Component } from '@angular/core';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.scss'],
})
export class ProfilesettingsComponent {
  
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

  url2 = '';
  onSelectFile2(event: any) {
    if (event.target && event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data URL

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url2 = event.target.result;
      };
    }
  }
  selectedItems = [];
  dropdownSettings = {};
  datePickerConfig = {
    format: 'DD-MM-YY',
  };

  dropdownList = [
    { id: '1', itemName: 'Laravel' },
    { id: '2', itemName: 'Angular' },
    { id: '3', itemName: 'HTML' },
    { id: '4', itemName: 'React' },
    { id: '5', itemName: 'Bootstrap' },
  ];

  updateFormat() {
    this.datePickerConfig = {
      ...this.datePickerConfig,
      format: 'DD-MM-YY',
    };
  }
  ngOnInit() {}
}
