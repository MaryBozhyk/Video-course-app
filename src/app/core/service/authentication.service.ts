import { Injectable } from '@angular/core';

import { HttpAuthService } from '@app/api';
import { LoginUser, UserInfo } from '@app/models';

import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly authKey: string = 'Video_course_user';

  constructor(private httpAuth: HttpAuthService) {}

  login(value: LoginUser): Observable<UserInfo> {
    return this.httpAuth.getAuthToken(value).pipe(
      switchMap(token => this.httpAuth.getUserInfo(token)),
      tap(value => console.log(window.localStorage.setItem(this.authKey, JSON.stringify(value))))
    );
  }

  logout(): void {
    window.localStorage.removeItem(this.authKey);
  }

  isAuthenticated(): boolean {
    return this.getUserInfo() !== null;
  }

  getUserInfo(): UserInfo {
    return JSON.parse(window.localStorage.getItem(this.authKey));
  }
}
