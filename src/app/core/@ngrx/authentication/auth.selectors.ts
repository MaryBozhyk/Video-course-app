import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './../app.state';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AppState, AuthState>('auth');
export const selectAuthData = createSelector(selectAuthState, (state: AuthState) => state.data);
export const selectIsLogged = createSelector(selectAuthState, (state: AuthState) => state.isLoggedIn);
