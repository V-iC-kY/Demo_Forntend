import { Component } from '@angular/core';
import { PushNotificationService } from './pushservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showFooter = true;

  constructor(private token: PushNotificationService, private router: Router) {
    // this.token.getToken()
  }
}