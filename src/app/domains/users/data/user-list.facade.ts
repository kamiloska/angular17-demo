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

  loadUsers(): void {
    this._userService.getUsers()
      .subscribe(users => {
        this._users.set(users);
      })
  }
}
