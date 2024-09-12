import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  recentChats = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '2:15 PM' },
    { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', time: '1:45 PM' },
    { id: 3, name: 'Bob Johnson', lastMessage: 'What’s up?', time: '12:30 PM' }
  ];

  constructor() { }



  startNewChat() {
    console.log('Starting a new chat...');
    // Add logic to start a new chat
  }

  openChat(chatId: number) {
    console.log('Opening chat with ID:', chatId);
    // Add logic to open an existing chat by ID
  }
}
