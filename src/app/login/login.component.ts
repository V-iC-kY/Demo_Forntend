import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {


  phoneNumber: string = '';
  password: string = '';
  username: string = '';
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  serverError: string | null = null;
  showOTP = false;
  otp: string[] = ['', '', '', ''];
  location: any;
  backendError: string = '';

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) {

  }

  onLogin() {
    if (this.phoneNumber && this.password || this.username && this.password) {
      const post = {
        userModel: {
          "phoneNumber": this.phoneNumber,
          "username": this.username,
          "password": this.password
        },
        fcmModel: {
          fcmtoken: localStorage.getItem("fcmToken")
        }
      };

      this.api.Login(post).subscribe({
        next: (res) => {
          this.showOTP = true;
        },
        error: (err) => {
          this.backendError = err.message;
        }
      });
    } else {
      this.backendError = 'All fields are required.';

    }
  }

  goToForgotPassword() {

  }

  verifyOtp() {
    const otpCode = this.otp.join('');
    this.api.ValidateOtp(otpCode).subscribe({
      next: (res: any) => {
        this.router.navigate(['/home']).then(() => {
          this.location.replaceState('/home');
        });
      },
      error: (err => {
        this.backendError = 'An error occurred while verifying OTP. Please try again.';
      })
    })

  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  resendOtp() {
    console.log('Resending OTP...');
    this.otp = ['', '', '', ''];
  }

  moveFocus(event: any, index: number) {
    const nextInput = event.target.nextElementSibling;
    if (nextInput && event.target.value.length === 1) {
      nextInput.focus();
    } else if (event.target.value.length === 0 && index > 0) {
      const previousInput = event.target.previousElementSibling;
      if (previousInput) {
        previousInput.focus();
      }
    }
  }

}
