import { createAction, props } from '@ngrx/store';

import { LoginUser, UserInfo } from '@app/models';

export const login = createAction(
  '[Auth] LOGIN',
  props<{ userData: LoginUser }>()
);

export const loginSuccess = createAction(
  '[Login Effect] LOGIN_SUCCEESS',
  props<{ userData: UserInfo }>()
);

export const loginError = createAction(
  '[Login Effect] LOGIN_ERROR',
  props<{ error: Error | string }>()
);

export const logout = createAction('[Auth] LOGOUT');
