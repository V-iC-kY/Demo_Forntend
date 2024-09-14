import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent  implements OnInit {

  contactTitle: any;
  contactDescription: any;
  newMessage: string = '';
  messages: { content: string, sender: string }[] = [];
  @ViewChild('messageContainer') messageContainer!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.contactTitle = params['title'];
      this.contactDescription = params['description'];
    });

    // Example initial chat messages
    this.messages = [
      { content: 'Hello!', sender: 'contact' },
      { content: 'Hi! How are you?', sender: 'me' },
      { content: 'I’m good, thanks. How about you?', sender: 'contact' }
    ];
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ content: this.newMessage, sender: 'me' });
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    }, 100);
  }

}
