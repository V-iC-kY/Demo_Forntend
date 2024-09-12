import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  fcmToken: any;


  constructor(private api: ApiService) { }

  email: string = '';
  phoneNumber: string = '';
  showOTP: boolean = false;
  loginform: boolean = true
  showOtpBox: boolean = false
  otp: string = '';
  otp1: any;
  otp2: any;
  otp3: any;
  otp4: any;

  login() {
    let post = {
      "userModel": {
        "email": this.email,
        "phoneNumber": this.phoneNumber
      },
      "FCMmodel": {
        "fcmtoken": this.fcmToken = localStorage.getItem("fcmToken")
      }
    }
    console.log(post);
    
    this.api.Login(post).subscribe({
      next: (res => {
        console.log(res);
      }), error: (err => {
        console.log(err);
      })
    })
    this.showOTP = true;
    this.loginform = false
    this.showOtpBox = true
  }

  submitOTP() {
    console.log('OTP submitted:', this.otp);
    this.showOTP = false;
    this.loginform = true
    this.email = '';
    this.phoneNumber = '';
    this.otp = '';
  }
}
