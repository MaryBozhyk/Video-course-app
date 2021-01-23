import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Author, Course } from '@app/models';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { selectEditedData } from '@app/core/@ngrx';
import * as CoursesActions from '@app/core/@ngrx/courses/courses.actions';
import * as AuthorsActions from '@app/core/@ngrx/authors/authors.actions';
import { selectCoursesError } from '@app/core/@ngrx/courses';
import { selectAuthorsData } from '@app/core/@ngrx/authors';

@Component({
  selector: 'app-new-courses-page',
  templateUrl: './new-courses-page.component.html',
  styleUrls: ['./new-courses-page.component.scss']
})
export class NewCoursesPageComponent implements OnInit, OnDestroy {
  course: Course;

  authors$: Observable<Author[]>;
  selectCoursesError$: Observable<Error | string>;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.store
        .pipe(
          select(selectEditedData),
          takeUntil(this.unsubscribe$)
        ).subscribe((course) => this.course = course);

      this.route.paramMap
        .pipe(
          takeUntil(this.unsubscribe$)
        ).subscribe((params: ParamMap) => {
          const id = params.get('id');
            if (id) {
              this.store.dispatch(CoursesActions.getCourse({ courseID: +id }));
            }
        }
      );
      
      this.store.dispatch(AuthorsActions.getAuthors());
      this.authors$ = this.store.pipe(select(selectAuthorsData));
      this.selectCoursesError$ = this.store.pipe(select(selectCoursesError));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onCreateNewCourse(course: Partial<Course>): void {
    if (this.course) {
      this.store.dispatch(CoursesActions.updateCourse({ course }));
    } else {
      this.store.dispatch(CoursesActions.addCourse({ course }));
    }
  }

  onCancel(): void {
    this.router.navigate(['courses']);
  }
}
