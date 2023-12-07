export interface Message {
  text: string;
  author: string;
  type: MessageType;
  created: string;
}

export enum MessageType {
  Sender,
  Recipient
}
