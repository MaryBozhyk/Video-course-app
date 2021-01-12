import { AuthState } from './authentication';
import { CoursesState } from './courses';

export interface AppState {
  courses: CoursesState;
  auth: AuthState
}
