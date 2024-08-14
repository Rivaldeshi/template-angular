import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('This is an example of tip', 'TIP', {
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    });
  }
  
  showError() {
    this.toastr.error('This is an example of tip', 'TIP', {
      timeOut: 2000,
      positionClass: 'toast-top-right',
    });
  }

  showInfo() {
    this.toastr.info('This is an example of tip', 'TIP', {
      timeOut: 1500,
      positionClass: 'toast-top-left',
    });
  }

  ShowWarning() {
    this.toastr.warning('This is an example of tip', 'TIP', {
      timeOut: 1500,
      positionClass: 'toast-top-left',
    });
  }

  Notification() {
    this.toastr.info('This is an example of tip', 'TIP', {
      timeOut: 1500,
      positionClass: 'toast-top-center',
    });
  }

}
