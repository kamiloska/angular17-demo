import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./domains/users/feature-user-manage').then(m => m.USER_MANAGE_ROUTES)
  }
];
