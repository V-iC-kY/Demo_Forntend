import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {

  currentView: string = 'posts';  // Default view is 'My Posts'

  posts = [
    { title: 'Post 1', description: 'This is post 1' },
    { title: 'Post 2', description: 'This is post 2' },
    { title: 'Post 3', description: 'This is post 3' },
    { title: 'Post 4', description: 'This is post 4' },
    { title: 'Post 5', description: 'This is post 5' },
    { title: 'Post 6', description: 'This is post 6' },
    { title: 'Post 7', description: 'This is post 7' },
    { title: 'Post 8', description: 'This is post 8' },
    { title: 'Post 9', description: 'This is post 9' },
    { title: 'Post 10', description: 'This is post 10' },
    { title: 'Post 11', description: 'This is post 11' },
    { title: 'Post 12', description: 'This is post 12' },
    { title: 'Post 13', description: 'This is post 13' },
    { title: 'Post 14', description: 'This is post 14' },
    { title: 'Post 15', description: 'This is post 15' },
    { title: 'Post 16', description: 'This is post 16' },
    { title: 'Post 17', description: 'This is post 17' },
    { title: 'Post 18', description: 'This is post 18' },
    { title: 'Post 19', description: 'This is post 19' },
    { title: 'Post 20', description: 'This is post 20' },
    { title: 'Post 21', description: 'This is post 21' },
    { title: 'Post 22', description: 'This is post 22' },
    { title: 'Post 23', description: 'This is post 23' },
    { title: 'Post 24', description: 'This is post 24' },
    { title: 'Post 25', description: 'This is post 25' },
    { title: 'Post 26', description: 'This is post 26' },
    { title: 'Post 27', description: 'This is post 27' },
    { title: 'Post 28', description: 'This is post 28' },
    { title: 'Post 29', description: 'This is post 29' },
    { title: 'Post 30', description: 'This is post 30' },
    { title: 'Post 31', description: 'This is post 31' },
    { title: 'Post 32', description: 'This is post 32' },
    { title: 'Post 33', description: 'This is post 33' },
    { title: 'Post 34', description: 'This is post 34' },
    { title: 'Post 35', description: 'This is post 35' },
    { title: 'Post 36', description: 'This is post 36' },
    { title: 'Post 37', description: 'This is post 37' },
    { title: 'Post 38', description: 'This is post 38' },
    { title: 'Post 39', description: 'This is post 39' },
    { title: 'Post 40', description: 'This is post 40' },
    { title: 'Post 41', description: 'This is post 41' },
    { title: 'Post 42', description: 'This is post 42' },
    { title: 'Post 43', description: 'This is post 43' },
    { title: 'Post 44', description: 'This is post 44' },
    { title: 'Post 45', description: 'This is post 45' },
    { title: 'Post 46', description: 'This is post 46' },
    { title: 'Post 47', description: 'This is post 47' },
    { title: 'Post 48', description: 'This is post 48' },
    { title: 'Post 49', description: 'This is post 49' },
    { title: 'Post 50', description: 'This is post 50' }
  ];


  checkoutProducts = [
    { name: 'Product 1', description: 'This is product 1', price: 49.99 },
    { name: 'Product 2', description: 'This is product 2', price: 99.99 }
  ];

  // Method to toggle between My Posts and Checkout List
  toggleView(view: string) {
    this.currentView = view;
  }

  message() {

  }
  editProfile() {

  }


}
