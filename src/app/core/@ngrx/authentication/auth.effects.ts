import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthenticationService } from '@app/core/service';
import { LoginUser } from '@app/models';

import { Observable, of } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthenticationService,
        private router: Router,
    ) {
        console.log('[AUTH EFFECTS]');
    }

    login$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            pluck('userData'),
            switchMap((userData: LoginUser) => this.login(userData))
        )
    );

    private login(userData: LoginUser): Observable<Action> {
        return this.authService
            .login(userData)
            .pipe(
                map(userData => {
                    this.router.navigate(['courses']);
                    return AuthActions.loginSuccess({ userData })
                }),
                catchError(error => of(AuthActions.loginError({ error }))
            )
        )
    }
}
