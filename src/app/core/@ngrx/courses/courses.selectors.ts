import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './../app.state';
import { CoursesState } from './courses.state';

export const selectCoursesState = createFeatureSelector<AppState, CoursesState>('courses');
export const selectCoursesData = createSelector(selectCoursesState, (state: CoursesState) => state.data);
export const selectEditedData = createSelector(selectCoursesState, (state: CoursesState) => state.editedCourse);
