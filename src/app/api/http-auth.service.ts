import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginUser, Token, UserInfo } from '@app/models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {
  url: string = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  getAuthToken(userInfo: LoginUser): Observable<Token> {
    return this.http.post<Token>(`${this.url}/auth/login`, userInfo);
  }

  getUserInfo(token: Token): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.url}/auth/userinfo`, token);
  }
}
