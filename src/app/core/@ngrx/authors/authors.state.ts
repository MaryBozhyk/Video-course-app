import { Author } from '@app/models';

export interface AuthorsState {
  authors: Author[];
  readonly error: Error | string;
}

export const initialAuthorsState: AuthorsState = {
  authors: null,
  error: null
};
