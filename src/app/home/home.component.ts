import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {



  posts = [
    {
      user: {
        name: 'John Doe',
        profileImage: 'https://via.placeholder.com/50x50.png?text=JD'
      },
      productId: 1,
      price: 50,
      image: 'https://via.placeholder.com/150.png?text=Product+1',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    },
    {
      user: {
        name: 'Jane Smith',
        profileImage: 'https://via.placeholder.com/50x50.png?text=JS'
      },
      productId: 2,
      price: 75,
      image: 'https://via.placeholder.com/150.png?text=Product+2',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    },
    {
      user: {
        name: 'Alice Johnson',
        profileImage: 'https://via.placeholder.com/50x50.png?text=AJ'
      },
      productId: 3,
      price: 100,
      image: 'https://via.placeholder.com/150.png?text=Product+3',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    },
    {
      user: {
        name: 'Bob Brown',
        profileImage: 'https://via.placeholder.com/50x50.png?text=BB'
      },
      productId: 4,
      price: 150,
      image: 'https://via.placeholder.com/150.png?text=Product+4',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    },
    {
      user: {
        name: 'Clara White',
        profileImage: 'https://via.placeholder.com/50x50.png?text=CW'
      },
      productId: 5,
      price: 60,
      image: 'https://via.placeholder.com/150.png?text=Product+5',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    },
    {
      user: {
        name: 'Daniel Green',
        profileImage: 'https://via.placeholder.com/50x50.png?text=DG'
      },
      productId: 6,
      price: 90,
      image: 'https://via.placeholder.com/150.png?text=Product+6',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    },
    {
      user: {
        name: 'Eve Black',
        profileImage: 'https://via.placeholder.com/50x50.png?text=EB'
      },
      productId: 7,
      price: 120,
      image: 'https://via.placeholder.com/150.png?text=Product+7',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    },
    {
      user: {
        name: 'Frank Blue',
        profileImage: 'https://via.placeholder.com/50x50.png?text=FB'
      },
      productId: 8,
      price: 110,
      image: 'https://via.placeholder.com/150.png?text=Product+8',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    },
    {
      user: {
        name: 'Grace Yellow',
        profileImage: 'https://via.placeholder.com/50x50.png?text=GY'
      },
      productId: 9,
      price: 130,
      image: 'https://via.placeholder.com/150.png?text=Product+9',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    },
    {
      user: {
        name: 'Hank Red',
        profileImage: 'https://via.placeholder.com/50x50.png?text=HR'
      },
      productId: 10,
      price: 140,
      image: 'https://via.placeholder.com/150.png?text=Product+10',
      date: new Date(),
      liked: false,
      bookmarked: false,
      inCart: false,
      comments: []
    }
  ];


  contentList = [
    { id: 1, title: 'Content Item 1', description: 'Description for item 1' },
    { id: 2, title: 'Content Item 2', description: 'Description for item 2' },
    { id: 3, title: 'Content Item 3', description: 'Description for item 3' },
    { id: 4, title: 'Content Item 4', description: 'Description for item 4' },
    { id: 5, title: 'Content Item 5', description: 'Description for item 5' },
    { id: 6, title: 'Content Item 6', description: 'Description for item 6' },
    { id: 7, title: 'Content Item 7', description: 'Description for item 7' },
    { id: 8, title: 'Content Item 8', description: 'Description for item 8' },
    { id: 9, title: 'Content Item 9', description: 'Description for item 9' },
    { id: 10, title: 'Content Item 10', description: 'Description for item 10' },
    { id: 11, title: 'Content Item 11', description: 'Description for item 11' },
    { id: 12, title: 'Content Item 12', description: 'Description for item 12' },
    { id: 13, title: 'Content Item 13', description: 'Description for item 13' },
    { id: 14, title: 'Content Item 14', description: 'Description for item 14' },
    { id: 15, title: 'Content Item 15', description: 'Description for item 15' },
    { id: 16, title: 'Content Item 16', description: 'Description for item 16' },
    { id: 17, title: 'Content Item 17', description: 'Description for item 17' },
    { id: 18, title: 'Content Item 18', description: 'Description for item 18' },
    { id: 19, title: 'Content Item 19', description: 'Description for item 19' },
    { id: 20, title: 'Content Item 20', description: 'Description for item 20' },
  ];

  activeCommentItem: any;
  newComment: string = '';

  showSearchBox = false;
  isDarkMode: boolean = false;
  cartCount: any ;
  isHeaderHidden: boolean = false;
  lastScrollTop: number = 0;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.updateCartCount();
  }

  toggleCommentPopup(item: any) {
    this.activeCommentItem = item;
  }

  closeCommentPopup() {
    this.activeCommentItem = null;
  }

  addComment(item: any) {
    if (this.newComment.trim()) {
      item.comments.push({ user: { name: 'Your Name' }, text: this.newComment });
      this.newComment = '';
    }
  }

  addProductToCart(product: any) {
    this.cartService.addToCart(product);
    product.inCart = true;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  toggleSearchBox() {
    this.showSearchBox = !this.showSearchBox;
  }

  toggleSetting() {
    this.router.navigate(['/settings']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  updateCartCount() {
    this.cartCount = this.cartService.getCartItems().length;
  }

  onScroll(event: any): void {
    const scrollTop = event.target.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }

    this.lastScrollTop = scrollTop;
  }

}
