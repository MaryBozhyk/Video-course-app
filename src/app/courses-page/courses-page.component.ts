import { Component, OnInit } from '@angular/core';

import { Course } from '@app/models';
import { CONSTANTS } from '@app/constants/constants';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { selectCoursesData } from '@app/core/@ngrx';
import * as CoursesActions from '@app/core/@ngrx/courses/courses.actions';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  searchedCourses: Course[];

  courses$: Observable<ReadonlyArray<Course>>;


  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.courses$ = this.store.pipe(select(selectCoursesData));
    this.store.dispatch(CoursesActions.getCourses());
  }

  onDeleteCourse(course: Course): void {
    const courseToDelete: Course = { ...course };
    this.store.dispatch(CoursesActions.deleteCourse({ course: courseToDelete }));
  }

  onLoadMoreCourses(): void {
    this.store.dispatch(CoursesActions.loadMoreCourses());
  }

  onSearchCourse(searchTerm: string): void {
    if (!searchTerm) {
      this.store.dispatch(CoursesActions.getCourses());
    } else if (searchTerm.length >= CONSTANTS.searchCount) {
      this.store.dispatch(CoursesActions.getSearchedCourses({ searchTerm }));
    }
  }
}
