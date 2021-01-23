import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as AuthActions from '@app/core/@ngrx/authentication/auth.actions';
import { selectAuthData } from '@app/core/@ngrx/authentication';
import { UserInfo } from '@app/models';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss']
})
export class LoginButtonsComponent implements OnInit, OnDestroy {
  userName: string;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store
      .pipe(
        select(selectAuthData),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((userData: UserInfo) => {
        if (userData) {
          this.userName = userData?.name?.first + ' ' + userData?.name?.last;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLogout(): void {
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['login']);
  }
}
