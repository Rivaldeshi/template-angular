import { Component } from '@angular/core';

@Component({
  selector: 'app-file-uploads',
  templateUrl: './file-uploads.component.html',
  styleUrls: ['./file-uploads.component.scss'],
})
export class FileUploadsComponent {
  files: File[] = [];
  files1: File[] = [];
  files2: File[] = [];
  files3: File[] = [];

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelect1(event: any) {
    this.files1.push(...event.addedFiles);
  }

  OnRemove1(event: any) {
    this.files1.splice(this.files1.indexOf(event), 2);
  }

  OnSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  OnRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }

  OnSelect3(event: any) {
    this.files3.push(...event.addedFiles);
  }

  OnRemove3(event: any) {
    this.files3.splice(this.files3.indexOf(event), 1);
  }
}
