import { Component, OnDestroy, OnInit } from '@angular/core';

import { Course } from '@app/models';
import { CoursesService } from '@shared/services';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  searchedCourses: Course[];
  searchTerm: string;

  courses$: Observable<Course[]>;

  private unsubscribe: Subject<void> = new Subject();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCourses();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onDeleteCourse(course: Course): void {
    this.coursesService.removeCourse(course).pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(
      () => {
        this.courses$ = this.searchTerm 
          ? this.coursesService.getSearchedCourses(this.searchTerm) 
          : this.coursesService.getCourses();
      },
      (err) => console.error(err),
    )
  }

  onLoadMoreCourses(): void {
    this.courses$ = this.coursesService.loadMoreCourses();
  }

  onSearchCourse(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.courses$ = this.coursesService.getSearchedCourses(searchTerm);
  }
}
