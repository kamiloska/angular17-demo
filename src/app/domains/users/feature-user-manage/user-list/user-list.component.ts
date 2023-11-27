import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Signal } from '@angular/core';

import { User, UserListFacade } from '../../data';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: Signal<User[]>;

  private _userListFacade = inject(UserListFacade);

  constructor() {
    this.users = this._userListFacade.users;
  }

  ngOnInit(): void {
    this._userListFacade.loadUsers();
  }
}
