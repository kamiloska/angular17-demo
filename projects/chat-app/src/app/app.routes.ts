import { Routes } from '@angular/router';

import { ChatWrapperComponent } from './domains/chat/feature-chat-window/chat-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    component: ChatWrapperComponent
  }
];

export default routes;
