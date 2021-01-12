import { Action, createReducer, on } from '@ngrx/store';

import { CoursesState, initialCoursesState } from './courses.state';
import * as CoursesActions from './courses.actions';

const reducer = createReducer(
    initialCoursesState,
  on(CoursesActions.getCourses, state => {
    console.log('GET_COURSES action being handled!');
    return {
      ...state
    };
  }),
  on(
    CoursesActions.getCoursesSuccess,
    CoursesActions.getSearchedCoursesSuccess,
    CoursesActions.loadMoreCoursesSuccess,
    (state, { courses }) => {
    console.log('GET/LOADMORE_COURSES/SEARCHEDCOURSES_SUCCESS action being handled!');
    const data = [...courses];
    return {
    ...state,
    data,
    editedCourse: null
    };
  }),
  on(
    CoursesActions.getCoursesError,
    CoursesActions.getSearchedCoursesError,
    CoursesActions.loadMoreCoursesError,
    CoursesActions.getCourseError,
    CoursesActions.updateCourseError,
    CoursesActions.deleteCourseError,
    (state, { error }) => {
    console.log('GET/LOADMORE/UPDATE/DELETE_COURSES/COURSE_ERROR action being handled!');
    return {
      ...state,
      editedCourse: null,
      error
    };
  }),
  on(CoursesActions.getCourse, state => {
    console.log('GET_COURSE action being handled!');
    return { ...state };
  }),
  on(CoursesActions.getCourseSuccess, (state, { course }) => {
    console.log('GET_COURSE_SUCCESS action being handled!');
    const editedCourse = { ...course };
    return {
      ...state,
      editedCourse
    };
  }),
  on(CoursesActions.addCourse, state => {
    console.log('CREATE_COURSE action being handled!');
    return { ...state };
  }),
  on(CoursesActions.updateCourse, state => {
    console.log('UPDATE_COURSE action being handled!');
    return { ...state };
  }),
  on(
    CoursesActions.updateCourseSuccess,
    CoursesActions.addCourseSuccess,
    (state, { course }) => {
    console.log('UPDATE/ADD_COURSE_SUCCESS action being handled!');
    return {
      ...state,
      course
    };
  }),
  on(CoursesActions.deleteCourse, state => {
    console.log('DELETE_COURSE action being handled!');
    return { ...state };
  }),
  on(CoursesActions.deleteCourseSuccess, (state, { course }) => {
    console.log('DELETE_COURSE_SUCCESS action being handled!');
    const data = state.data.filter(c => c.id !== course.id);
    return {
      ...state,
      data
    };
  }),
  on(CoursesActions.getSearchedCourses, state => {
    console.log('GET_SEARCHED_COURSES action being handled!');
    return { ...state };
  }),
  on(CoursesActions.loadMoreCourses, state => {
    console.log('LOAD_MORE_COURSES action being handled!');
    return { ...state };
  }),
);

export function coursesReducer(state: CoursesState | undefined, action: Action) {
  return reducer(state, action);
}
