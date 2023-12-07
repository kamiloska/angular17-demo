import { inject, Injectable, Signal, signal } from '@angular/core';

import { ChatService } from './chat.service';
import { Message, MessageType } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatFacade {
  messages: Signal<Message[]>;

  private _messages = signal<Message[]>([]);
  private _chatService = inject(ChatService);

  constructor() {
    this.messages = this._messages.asReadonly();
  }

  loadMessages(): void {
    this._chatService.getMessages()
      .subscribe(messages => {
        this._messages.set(messages);
      })
  }

  sendMessage(text: string): void {
    const message: Message = {
      text,
      author: 'Me',
      type: MessageType.Sender,
      created: new Date().toISOString(),
    }

    this._chatService.sendMessage(message)
      .subscribe(message => {
        this._messages.update(() => ([...this.messages(), message]));
      })
  }
}
