import { Component, OnDestroy, OnInit } from '@angular/core';

import { Course } from '@app/models';
import { CONSTANTS } from '@app/constants/constants';
import { CoursesService } from '@shared/services';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  searchedCourses: Course[];

  courses$: Observable<Course[]>;

  private unsubscribe: Subject<void> = new Subject();
  private searchSubject$ = new BehaviorSubject<string>(null);
  private searchedCourses$ = this.searchSubject$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    filter(searchTerm => searchTerm.length >= CONSTANTS.searchCount),
    switchMap(searchTerm => this.coursesService.getSearchedCourses(searchTerm))
  );

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
        this.courses$ = this.searchSubject$.value.length >= CONSTANTS.searchCount
          ? this.searchedCourses$
          : this.coursesService.getCourses();
      },
      (err) => console.error(err),
    )
  }

  onLoadMoreCourses(): void {
    this.courses$ = this.coursesService.loadMoreCourses();
  }

  onSearchCourse(searchTerm: string): void {
    this.searchSubject$.next(searchTerm);

    if (!searchTerm) {
      this.courses$ = this.coursesService.getCourses();
    } else if (searchTerm.length >= CONSTANTS.searchCount) {
      this.courses$ = this.searchedCourses$;
    }
  }
}
