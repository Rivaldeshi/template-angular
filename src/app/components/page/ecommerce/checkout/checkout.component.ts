import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(private router: Router) { }

  routerchange() {
    this.router.navigate(['/ecommerce/order-details']);
    document.querySelector('.transition.duration.duration.fixed.inset-0.z-50.bg-gray-900.bg-opacity-50.hs-overlay-backdrop')?.remove();
    document.body.removeAttribute('style');
  }
}
