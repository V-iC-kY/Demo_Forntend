import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {

  addresses = ['123 Main St', '456 Maple Ave', '789 Oak Blvd'];
  selectedAddress: any;

  constructor(private router: Router) { }

  selectAddress(address: string) {
    this.selectedAddress = address;
    this.router.navigate(['/cart'], { queryParams: { address: this.selectedAddress } });
  }

}
