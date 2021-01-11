import { createAction, props } from '@ngrx/store';

import { Course } from '@app/models';

export const getCourses = createAction('[Courses List Page] GET_COURSES');

export const getCoursesSuccess = createAction(
  '[Get Courses Effect] GET_COURSES_SUCCEESS',
  props<{ courses: Course[] }>()
);

export const getCoursesError = createAction(
  '[Get Courses Effect] GET_COURSES_ERROR',
  props<{ error: Error | string }>()
);
 
export const getCourse = createAction(
  '[Add/Edit Course Page] GET_COURSE',
  props<{ courseID: number }>()
);

export const getCourseSuccess = createAction(
  '[Get Course Effect] GET_COURSE_SUCCESS',
  props<{ course: Course }>()
);

export const getCourseError = createAction(
  '[Get Course Effect] GET_COURSE_ERROR',
  props<{ error: Error | string }>()
);

export const addCourse = createAction(
  '[Add/Edit Course Page] ADD_COURSE',
  props<{ course: Partial<Course> }>()
);

export const addCourseSuccess = createAction(
  '[Add Course Effect] ADD_COURSE_SUCCESS',
  props<{ course: Partial<Course> }>()
);

export const addCourseError = createAction(
  '[Add Course Effect] ADD_COURSE_ERROR',
  props<{ error: Error | string }>()
);

export const updateCourse = createAction(
  '[Add/Edit Course Page] EDIT_COURSE',
  props<{ course: Partial<Course> }>()
);

export const updateCourseSuccess = createAction(
  '[Edit Course Effect] EDIT_COURSE_SUCCESS',
  props<{ course: Partial<Course> }>()
);

export const updateCourseError = createAction(
  '[Edit Course Effect] EDIT_COURSE_ERROR',
  props<{ error: Error | string }>()
);

export const deleteCourse = createAction(
  '[Courses List Page] DELETE_COURSE',
  props<{ course: Course }>()
);

export const deleteCourseSuccess = createAction(	
  '[Delete Course Effect] DELETE_COURSE_SUCCESS',
  props<{ course: Course }>()
);

export const deleteCourseError = createAction(	
  '[Delete Course Effect] DELETE_COURSE_ERROR',
  props<{ error: Error | string }>()
);

export const getSearchedCourses = createAction(	
  '[Courses List Page] GET_SEARCHED_COURSES',
  props<{ searchTerm: string }>()
);

export const getSearchedCoursesSuccess = createAction(	
  '[Get Searched Courses Effect] GET_SEARCHED_COURSES_SUCCESS',
  props<{ courses: Course[] }>()
);

export const getSearchedCoursesError = createAction(	
  '[Get Searched Courses Effect] GET_SEARCHED_COURSES_ERROR',
  props<{ error: Error | string }>()
);

export const loadMoreCourses = createAction('[Courses List Page] LOAD_MORE_COURSES');

export const loadMoreCoursesSuccess = createAction(	
  '[Load More Courses Effect] LOAD_MORE_COURSES_SUCCESS',
  props<{ courses: Course[] }>()
);

export const loadMoreCoursesError = createAction(	
  '[Load More Courses Effect] LOAD_MORE_COURSES_ERROR',
  props<{ error: Error | string }>()
);
