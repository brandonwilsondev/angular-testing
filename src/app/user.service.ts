import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserTypes } from './types';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserTypes = {
    firstName: '',
    lastName: '',
    description: '',
  };

  constructor() {}

  submit(user: UserTypes) {
    this.user = user;
  }

  getUser(): Observable<UserTypes> {
    const user = of(this.user);
    return user;
  }
}
