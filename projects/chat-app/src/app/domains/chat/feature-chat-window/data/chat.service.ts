import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Message, MessageType } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  getMessages(): Observable<Message[]> {
    return of([
      {
        text: 'Welcome message!',
        author: 'John Doe',
        type: MessageType.Recipient,
        created: new Date().toISOString(),
      }
    ])
  }

  sendMessage(message: Message): Observable<Message> {
    return of(message);
  }
}
