import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  signupForm: any;
  isPopupOpen: boolean = false
  serverError: string | null = null;
  vjIdName: string = '';
  backendError: string = '';
  location: any;

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  signUp() {
    if (this.signupForm.valid) {
      const { username, email, password, phoneNumber } = this.signupForm.value;
      const post = {
        name: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password
      };

      this.api.CreateNew(post).subscribe({
        next: (res: any) => {
          console.log('API Response:', res);
          localStorage.setItem('email', res['Email']);
          this.isPopupOpen = true;
          this.signupForm = false
          this.signupForm.reset();
          this.serverError = null;
        },
        error: (err) => {
          this.serverError = this.getErrorMessage(err);
          console.error("HTTP Error:", err.message);
        }
      });
    }
  }

  getErrorMessage(error: any): string {
    if (error.status === 400) {
      return error.error.message || 'Bad Request';
    } else if (error.status === 401) {
      return 'Unauthorized access';
    } else if (error.status === 404) {
      return 'Resource not found';
    } else if (error.status === 500) {
      return 'Server error';
    } else {
      return 'An unexpected error occurred';
    }
  }

  submitVjIdName() {
    if (!this.vjIdName) {
      this.backendError = 'vjId Name is required.';
      return;
    }

    this.backendError = '';

    const postPayload = { vjId: this.vjIdName, email: localStorage.getItem('email') };


    this.api.GenerateName(postPayload).subscribe({
      next: (res: any) => {
        this.isPopupOpen = false;
        this.router.navigate(['/home']).then(() => {
          this.location.replaceState('/home');
        });
      },
      error: (err: any) => {
        this.backendError = err.error?.message || 'ID already in use.';
      }
    });
  }



  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
