import { Injectable } from '@angular/core';

import { HttpAuthService } from '@app/api';
import { LoginUser, UserInfo } from '@app/models';

import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly authKey: string = 'Video_course_user';

  constructor(private httpAuth: HttpAuthService) {}

  login(value: LoginUser): Observable<UserInfo> {
    return this.httpAuth.getAuthToken(value).pipe(
      tap(token => window.localStorage.setItem(this.authKey, JSON.stringify({...token, ...value}))),
      switchMap(token => this.getUserInfo(token)),
    );
  }

  logout(): void {
    window.localStorage.removeItem(this.authKey);
  }

  isAuthenticated(): Observable<boolean> {
    const isAuthDone = this.getLocalStorageData() !== null;
    return of(isAuthDone);
  }

  getLocalStorageData(): LoginUser {
    return JSON.parse(window.localStorage.getItem(this.authKey));
  }

  getUserInfo(token): Observable<UserInfo> {
    return this.httpAuth.getUserInfo(token);
  }
}
