import { Component } from '@angular/core';
import { PushNotificationService } from './pushservice';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private token: PushNotificationService) {
    this.token.getToken()
  }
}
