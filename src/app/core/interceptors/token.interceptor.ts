import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authTocken: string;

  constructor(public auth: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `${this.auth.getUserInfo().fakeToken}`
      }
    });

    return next.handle(request);
  }
}
