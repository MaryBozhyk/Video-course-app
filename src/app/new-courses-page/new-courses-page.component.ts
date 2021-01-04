import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from '@shared/services';
import { Course } from '@app/models';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-new-courses-page',
  templateUrl: './new-courses-page.component.html',
  styleUrls: ['./new-courses-page.component.scss']
})
export class NewCoursesPageComponent implements OnInit, OnDestroy {
  courseId: string;
  
  course$: Observable<Course>;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');

    if (this.courseId != null) {
      this.course$ = this.coursesService.getCourse(Number(this.courseId));
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onCreateNewCourse(course: Partial<Course>): void {
    if (this.course$) {
      this.coursesService.updateCourse(course).pipe(
        takeUntil(this.unsubscribe)
      ).subscribe(
        () => this.coursesService.getCourses(),
        (err) => console.error(err),
      )
    } else {
      this.coursesService.createCourse(course).pipe(
        takeUntil(this.unsubscribe)
      ).subscribe(
        () => this.coursesService.getCourses(),
        (err) => console.error(err),
      );
    }
    this.router.navigate(['courses']);
  }

  onCancel(): void {
    this.router.navigate(['courses']);
  }
}
