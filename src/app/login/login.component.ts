import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

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
      "fcmModel": {
        "fcmtoken": localStorage.getItem("fcmToken")
      }
    }
    console.log("post", post);

    this.api.Login(post).subscribe({
      next: (res => {
        console.log("res", res);
      }), error: (err => {
        console.log("HTTP Error:", err.message);
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
