import { Action, createReducer, on } from '@ngrx/store';

import { AuthorsState, initialAuthorsState } from './authors.state';
import * as AuthorsActions from './authors.actions';

const reducer = createReducer(
  initialAuthorsState,
  on(AuthorsActions.getAuthors, state => {
    console.log('GET_AUTHORS action being handled!');
    return {
      ...state
    };
  }),
  on(
    AuthorsActions.getAuthorsSuccess,
    (state, { authorsData }) => {
    console.log('GET_AUTHORS_SUCCESS action being handled!');
    return {
    ...state,
    authors: authorsData,
    error: null
    };
  }),
  on(
    AuthorsActions.getAuthorsError,
    (state, { error }) => {
    console.log('GET_AUTHORS_ERROR action being handled!');
    return {
      ...state,
      error
    };
  }),
);

export function authorsReducer(state: AuthorsState | undefined, action: Action) {
  return reducer(state, action);
}
