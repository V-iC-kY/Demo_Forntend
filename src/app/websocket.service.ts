import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket$: WebSocketSubject<any> | any;
  public isConnected = false;

  public messages: Subject<any> = new Subject<any>();

  public connect(userId: number): void {
    this.socket$ = webSocket(`ws://localhost:8080/websocket?userId=${userId}`);

    this.socket$.subscribe(
      (message:any) => {
        this.messages.next(message);
      },
      (err:any) => console.error(err),
      () => console.warn('Completed!')
    );

    this.isConnected = true;
  }

  public sendMessage(chatMessage: any): void {
    this.socket$.next(chatMessage);
  }

  public disconnect(): void {
    if (this.socket$) {
      this.socket$.complete(); // Close the connection
      this.isConnected = false;
    }
  }
}
