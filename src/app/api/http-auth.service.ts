import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginUser, Token, UserInfo } from '@app/models';
import { CONSTANTS } from '@app/constants/constants';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {
  constructor(private http: HttpClient) { }

  getAuthToken(userInfo: LoginUser): Observable<Token> {
    return this.http.post<Token>(`${CONSTANTS.baseUrl}/auth/login`, userInfo);
  }

  getUserInfo(token: Token): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${CONSTANTS.baseUrl}/auth/userinfo`, token);
  }
}
