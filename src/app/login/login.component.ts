import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: any;
  otpForm: any;
  showOTP: boolean = false;
  showError: boolean = false;

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });

    this.otpForm = this.fb.group({
      otp1: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      otp2: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      otp3: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      otp4: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const post = {
      userModel: {
        email: this.loginForm.value.email,
        phoneNumber: this.loginForm.value.phoneNumber
      },
      fcmModel: {
        fcmtoken: localStorage.getItem("fcmToken")
      }
    };

    this.api.Login(post).subscribe({
      next: (res) => {
        this.showOTP = true;
        this.showError = false;
        this.loginForm = false
      },
      error: (err) => {
        this.showError = true;
        console.error("HTTP Error:", err.message);
      }
    });
    this.showOTP = true;
    this.loginForm = false
  }

  submitOTP() {
    if (this.otpForm.invalid) {
      console.log('OTP form is invalid');
      this.otpForm.markAllAsTouched();
      return;
    }

    const otp = `${this.otpForm.value.otp1}${this.otpForm.value.otp2}${this.otpForm.value.otp3}${this.otpForm.value.otp4}`;
    console.log('OTP submitted:', otp);

    this.showOTP = false;
    this.otpForm.reset();

    this.router.navigate(['/home']);
  }

  moveFocus(event: Event, nextField: string | null) {
    const input = event.target as HTMLInputElement;

    if (nextField) {
      const nextInput = document.querySelector(`[formControlName="${nextField}"]`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  signUp() {
    this.router.navigate(['/signup']);
  }
}
