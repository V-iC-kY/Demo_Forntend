import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  username: string = '';
  isPopupOpen: boolean = false;
  serverError: string | null = null;
  serverError1: string | null = null;
  location: any;

  nameInvalid = false;
  emailInvalid = false;
  phoneNumberInvalid = false;
  passwordInvalid = false;

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) {

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
    } else if (error === "All fields are required.") {
      return 'All fields are required.';
    }
    else if (error === "vjId Name is required.") {
      return 'vjId Name is required.';
    } else {
      return 'An unexpected error occurred';
    }
  }

  onSubmit() {
    this.isPopupOpen = true;
    // if (this.name && this.email && this.phoneNumber && this.password) {
    //   this.isPopupOpen = true;
    //   this.serverError = null
    // } else {
    //   this.isPopupOpen = false;
    //   this.serverError = this.getErrorMessage('All fields are required.');
    // }
  }

  onSubmitName() {
    // if (this.name && this.email && this.phoneNumber && this.password && this.username) {
      // const post = {
      //   userModel: {
      //     "name": this.name,
      //     "email": this.email,
      //     "phoneNumber": this.phoneNumber,
      //     "password": this.password,
      //     "userName": this.username
      //   },
      //   fcmModel: {
      //     fcmtoken: localStorage.getItem("fcmToken")
      //   }
      // };

      // this.api.CreateNew(post).subscribe({
      //   next: (res: any) => {
      //     localStorage.setItem('email', res['Email']);
          this.isPopupOpen = false;
          this.router.navigate(['/home']).then(() => {
            this.location.replaceState('/home');
          });
      //     this.serverError = null;
      //   },
      //   error: (err) => {
      //     this.serverError1 = this.getErrorMessage(err);
      //   }
      // });

    // } else {
      // this.serverError1 = this.getErrorMessage('Name is required.');
    // }
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }


}
