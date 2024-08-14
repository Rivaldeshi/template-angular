import { Component, Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  fire(config: any): Promise<SweetAlertResult<any>> {
    return Swal.fire(config);
  }
}

@Component({
  selector: 'app-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss'],
})
export class SweetalertComponent {
  constructor(private swalService: SwalService) {}

  async openSwal() {
    const { value: email } = await this.swalService.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address',
    });

    if (email) {
      this.swalService.fire(`Entered email: ${email}`);
    }
  }

  basicAlert() {
    Swal.fire({
      title: 'Welcome to Your Admin Page',
      confirmButtonColor: '#0162e8',
    });
  }
  dangerAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Something went Wrong',
      confirmButtonColor: '#0162e8',
    });
  }
  imageAlert() {
    Swal.fire({
      imageUrl: './assets/img/brand-logos/desktop-logo.png',
      confirmButtonColor: '#0162e8',
    });
  }
  buttonsAlert() {
    Swal.fire({
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#0162e8',
      cancelButtonText: 'No, cancel it!',
      cancelButtonColor: '#0162e8',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0162e8',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled!',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: '#0162e8',
        });
      }
    });
  }
  timerAlert() {
    Swal.fire({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      confirmButtonColor: '#0162e8',
      timer: 2000,
      timerProgressBar: true,
    });
  }
  animationAlert() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      confirmButtonColor: '#0162e8',
    });
  }
  basicAlert1() {
    Swal.fire({
      icon: 'question',
      title: 'The internet',
      text: 'That thing is still around?',
      confirmButtonColor: '#0162e8',
    });
  }
  basicAlert2() {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this",
      confirmButtonColor: '#0162e8',
      iconColor: '#eab308',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonColor: '#0162e8',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0162e8',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled!',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: '#0162e8',
        });
      }
    });
  }
  basicAlert3() {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#0162e8',
      cancelButtonText: 'No, cancel it!',
      cancelButtonColor: '#f43f5e',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0162e8',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled!',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: '#f43f5e',
        });
      }
    });
  }
  basicAlert4() {
    Swal.fire({
      icon: 'success',
      text: 'Your work has been saved',
      confirmButtonColor: '#0162e8',
      position: 'top-end',
    });
  }
  basicAlert5() {
    Swal.fire({
      icon: 'success',
      text: 'Your work has been saved',
      confirmButtonColor: '#0162e8',
      position: 'top-start',
    });
  }
  basicAlert6() {
    Swal.fire({
      icon: 'success',
      text: 'Your work has been saved',
      confirmButtonColor: '#0162e8',
      position: 'bottom-start',
    });
  }
  basicAlert7() {
    Swal.fire({
      icon: 'success',
      title: 'The internet',
      text: 'Your work has been saved',
      position: 'bottom-end',
    });
  }
  basicAlert8() {
    Swal.fire({
      icon: 'success',
      text: 'Your work has been saved',
      confirmButtonColor: '#0162e8',
      position: 'center',
    });
  }
}
