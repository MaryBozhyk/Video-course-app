import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as AuthorsActions from './authors.actions';
import { AuthorsService } from '@app/new-courses-page/services';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthorsEffects {

    constructor(
        private actions$: Actions,
        private authorsService: AuthorsService,
    ) {
        console.log('[GET AUTHORS EFFECTS]');
    }

    getAuthors$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthorsActions.getAuthors),
            switchMap(() => this.getAuthors())
        )
    );

    private getAuthors(): Observable<Action> {
        return this.authorsService
            .getAuthors()
            .pipe(
                map(authorsData => {
                    return AuthorsActions.getAuthorsSuccess({ authorsData })
                }),
                catchError(error => of(AuthorsActions.getAuthorsError({ error }))
            )
        )
    }
}
