import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Course } from '@app/models';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { selectEditedData } from '@app/core/@ngrx';
import * as CoursesActions from '@app/core/@ngrx/courses/courses.actions';

@Component({
  selector: 'app-new-courses-page',
  templateUrl: './new-courses-page.component.html',
  styleUrls: ['./new-courses-page.component.scss']
})
export class NewCoursesPageComponent implements OnInit, OnDestroy {
  course: Course;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
      let observer: any = {
        next: (course: Course) => {
          if (course) {
            this.course = { ...course };
          }
        },
        error(err) {
          console.log(err); 
        },
        complete() {
          console.log('Stream is completed');
        }
      };
  
      this.store
        .pipe(
          select(selectEditedData),
          takeUntil(this.unsubscribe$)
        )
        .subscribe(observer);
  
      observer = {
        ...observer,
        next: (params: ParamMap) => {
          const id = params.get('id');
          if (id) {
            this.store.dispatch(CoursesActions.getCourse({ courseID: +id }));
          }
        }
      }; 
      this.route.paramMap.subscribe(observer);
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
