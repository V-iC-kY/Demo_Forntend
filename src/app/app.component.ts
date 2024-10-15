import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from './pushservice';
import { Router } from '@angular/router';
import { CartItem, CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  constructor(private token: PushNotificationService, private router: Router, private cartService: CartService) {
    // this.token.getToken()
  }

  openChat(itemId: number) {
    this.router.navigate(['/chatpage']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  createPost(): void {
    console.log('Create post clicked');
  }
  
}
