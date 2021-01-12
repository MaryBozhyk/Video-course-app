import { UserInfo } from '@app/models';

export interface AuthState {
  data: UserInfo;
  isLoggedIn: boolean;
  readonly error: Error | string;
}

export const initialAuthState: AuthState = {
  data: null,
  isLoggedIn: false,
  error: null
};
