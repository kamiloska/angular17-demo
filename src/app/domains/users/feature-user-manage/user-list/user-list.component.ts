import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { startWith, Subject } from 'rxjs';

import { User, UserListFacade } from '../../data';
import { UserSearchComponent } from './user-search/user-search.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    UserSearchComponent,
    MatCardModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: Signal<User[]>;

  private _userListFacade = inject(UserListFacade);
  private _searchChangedSubject = new Subject<string>()

  constructor() {
    this.users = this._userListFacade.users;
    this._searchChangedSubject
      .pipe(
        startWith(''),
        takeUntilDestroyed()
      ).subscribe(search => {
        this._userListFacade.loadUsers(search);
      })
  }

  onSearchChanged(search: string): void {
    this._searchChangedSubject.next(search);
  }
}
