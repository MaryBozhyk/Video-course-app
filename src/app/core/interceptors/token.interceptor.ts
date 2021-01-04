import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../service';
import { SpinnerService } from '@app/shared/components/spinner';
import { finalize } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthenticationService, private spinner: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    request = request.clone({
      setHeaders: {
        Authorization: `${this.auth.getLocalStorageData()?.token}`
      }
    });

    return next.handle(request).pipe(
      finalize(() => {
        this.spinner.hide()
      })
    );
  }
}
