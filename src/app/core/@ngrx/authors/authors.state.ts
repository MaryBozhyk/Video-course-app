import { Option } from '@app/models';

export interface AuthorsState {
  authors: Option[];
  readonly error: Error | string;
}

export const initialAuthorsState: AuthorsState = {
  authors: null,
  error: null
};
