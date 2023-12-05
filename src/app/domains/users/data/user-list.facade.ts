import { inject, Injectable, Signal, signal } from '@angular/core';

import { User } from './user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserListFacade {
  readonly users: Signal<User[]>;

  private _users = signal<User[]>([]);
  private _userService = inject(UserService);

  constructor() {
    this.users = this._users.asReadonly();
  }

  loadUsers(search: string): void {
    this._userService.getUsers(search)
      .subscribe(users => {
        this._users.set(users);
      })
  }
}
