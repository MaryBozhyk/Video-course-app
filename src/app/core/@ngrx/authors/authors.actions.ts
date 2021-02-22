import { createAction, props } from '@ngrx/store';

import { Option } from '@app/models';

export const getAuthors = createAction('[Add/Edit Course Page] GET_AUTHORS');

export const getAuthorsSuccess = createAction(
  '[Get Authors Effect] GET_AUTHORS_SUCCEESS',
  props<{ authorsData: Option[] }>()
);

export const getAuthorsError = createAction(
  '[Get Authors Effect] GET_AUTHORS_ERROR',
  props<{ error: Error | string }>()
);
