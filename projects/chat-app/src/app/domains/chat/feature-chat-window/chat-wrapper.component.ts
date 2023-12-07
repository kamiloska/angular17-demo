import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ChatFacade } from './data/chat.facade';
import { Message, MessageType } from './data/message.model';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrl: './chat-wrapper.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
})
export class ChatWrapperComponent implements OnInit {
  messages: Signal<Message[]>;
  messageType = MessageType;
  message = signal<string>('');

  private _chatFacade = inject(ChatFacade);

  constructor() {
    this.messages = this._chatFacade.messages;
  }

  ngOnInit(): void {
    this._chatFacade.loadMessages();
  }

  onSendMessageClick(): void {
    const message = this.message();
    this.message.update(() => '');

    this._chatFacade.sendMessage(message);
  }

}
