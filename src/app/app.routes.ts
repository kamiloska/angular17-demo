import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./domains/users/feature-user-manage').then(m => m.USER_MANAGE_ROUTES)
  },
  {
    path: 'chat',
    loadComponent: () => loadRemoteModule('chat', './Component')
  },
  {
    path: 'chat-router',
    loadChildren: () => loadRemoteModule('chat', './Routes')
  }
];
