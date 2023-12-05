import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(search: string): Observable<User[]> {
    let users = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        avatarUrl: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        id: 2,
        firstName: 'Sam',
        lastName: 'Smith',
        avatarUrl: 'https://www.w3schools.com/howto/img_avatar2.png'
      },
      {
        id: 3,
        firstName: 'Mr.',
        lastName: 'No avatar',
        avatarUrl: ''
      }
    ];

    if (search) {
      const toLowerCaseSearch = search.toLowerCase();
      users = users.filter(
        user => user.firstName.toLowerCase().includes(toLowerCaseSearch) || user.lastName.toLowerCase().includes(toLowerCaseSearch)
      );
    }

    return of(users);
  }
}
