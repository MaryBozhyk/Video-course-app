import { Injectable } from '@angular/core';

import { HttpAuthService } from '@app/api';
import { CONSTANTS } from '@app/constants/constants';
import { LoginUser, UserInfo } from '@app/models';

import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpAuth: HttpAuthService) {}

  login(value: LoginUser): Observable<UserInfo> {
    return this.httpAuth.getAuthToken(value).pipe(
      tap(token => window.localStorage.setItem(CONSTANTS.authKey, JSON.stringify({...token, ...value}))),
      switchMap(token => this.getUserInfo(token)),
    );
  }

  isAuthenticated(): Observable<boolean> {
    const isAuthDone = this.getLocalStorageData() !== null;
    return of(isAuthDone);
  }

  getLocalStorageData(): LoginUser {
    return JSON.parse(window.localStorage.getItem(CONSTANTS.authKey));
  }

  getUserInfo(token): Observable<UserInfo> {
    return this.httpAuth.getUserInfo(token);
  }
}
