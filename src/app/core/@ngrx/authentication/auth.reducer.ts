import { Action, createReducer, on } from '@ngrx/store';

import { AuthState, initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';
import { CONSTANTS } from '@app/constants/constants';

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.login, state => {
    console.log('LOGIN action being handled!');
    return {
      ...state
    };
  }),
  on(
    AuthActions.loginSuccess,
    (state, { userData }) => {
    console.log('LOGIN_SUCCESS action being handled!');
    const data = {...userData};
    return {
    ...state,
    data,
    isLoggedIn: true,
    error: null
    };
  }),
  on(
    AuthActions.loginError,
    (state, { error }) => {
    console.log('LOGIN_ERROR action being handled!');
    return {
      ...state,
      isLoggedIn: false,
      error
    };
  }),
  on(AuthActions.logout, state => {
    console.log('LOGOUT action being handled!');
    window.localStorage.removeItem(CONSTANTS.authKey);
    return {
      ...state,
      data: null,
      isLoggedIn: false,
    };
  }),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
