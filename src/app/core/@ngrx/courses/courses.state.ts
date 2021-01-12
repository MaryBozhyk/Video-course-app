import { Course } from '@app/models';

export interface CoursesState {
  data: Array<Course>;
  editedCourse: Readonly<Course>;
  readonly error: Error | string;
}

export const initialCoursesState: CoursesState = {
  data: [],
  editedCourse: null,
  error: null
};
