import { AuthState } from './authentication';
import { AuthorsState } from './authors';
import { CoursesState } from './courses';

export interface AppState {
  courses: CoursesState;
  auth: AuthState,
  authors: AuthorsState
}
