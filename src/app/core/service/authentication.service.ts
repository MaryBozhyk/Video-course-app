import { Injectable } from '@angular/core';

import { LoginUser } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly authKey: string = 'Video_course_user';

  login(value: LoginUser): void {
    window.localStorage.setItem(this.authKey, JSON.stringify(value));
  }

  logout(): void {
    window.localStorage.removeItem(this.authKey);
  }

  isAuthenticated(): boolean {
    return this.getUserInfo() !== null;
  }

  getUserInfo(): LoginUser {
    return JSON.parse(window.localStorage.getItem(this.authKey));
  }
}
