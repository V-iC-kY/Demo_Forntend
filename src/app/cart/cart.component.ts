import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {


  paymentMethod: any;
  cartItems: any[] = [];
  selectedAddress: any;

  subtotal: number = 0;
  discount: number = 0;
  totalAmount: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();

    this.route.queryParams.subscribe(params => {
      this.selectedAddress = params['address'];
    });
    this.calculateTotals();
  }

  calculateTotals() {
    this.subtotal = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    this.discount = this.calculateDiscount();

    this.totalAmount = this.subtotal - this.discount;
  }

  calculateDiscount(): number {
    return this.subtotal * 0.10;
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotals();
  }

  navigateToAddress() {
    this.router.navigate(['/address']);
  }

  checkout() {
    if (!this.selectedAddress) {
      alert('Please select an address before checking out.');
      return;
    }
    console.log('Checkout initiated with address:', this.selectedAddress);
  }

  selectPaymentMethod(method: string) {
    this.paymentMethod = method;
  }

  goBack() {
    this.location.back();
  }


}
