import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './../app.state';
import { AuthorsState } from './authors.state';

export const selectAuthorsState = createFeatureSelector<AppState, AuthorsState>('authors');
export const selectAuthorsData = createSelector(selectAuthorsState, (state: AuthorsState) => state.authors);
