import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


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


  contactTitle: any;
  contactDescription: any;
  newMessage: string = '';
  messages: { content: string, sender: string }[] = [];
  @ViewChild('messageContainer') messageContainer!: ElementRef;

  isDarkMode = false;
  showSearchBox = false;

  constructor(private router: Router) { }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  toggleSearchBox() {
    this.showSearchBox = !this.showSearchBox;
  }

  toggleSetting() {
    this.router.navigate(['/settings']);
  }

  openChat(itemId: number) {
    this.router.navigate(['/chatpage']);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  createPost(): void {
    console.log('Create post clicked');
  }

}
