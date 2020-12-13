import { Injectable } from '@angular/core';

import { LoginUser } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly authKey: string = 'Video_course_user';
  private isLoggedIn: boolean = false;

  constructor() {}

  login(value: LoginUser): void {
    window.localStorage.setItem(this.authKey, JSON.stringify(value));
    this.isLoggedIn = true;
  }

  logout(): void {
    window.localStorage.removeItem(this.authKey);
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserInfo(): LoginUser {
    return JSON.parse(window.localStorage.getItem(this.authKey));
  }
}
