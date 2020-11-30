import { Injectable } from '@angular/core';

import { LoginUser } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn: boolean = false; 
  private authKey: string = 'Video_course_user';

  constructor() {}

  login(key: string, value: LoginUser): void {
    window.localStorage.setItem(key, JSON.stringify(value));
    this.isLoggedIn = true;
  }

  logout(key: string = this.authKey): void {
    window.localStorage.removeItem(key);
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserInfo(key: string = this.authKey): LoginUser {
    return JSON.parse(window.localStorage.getItem(key));
  }
}
