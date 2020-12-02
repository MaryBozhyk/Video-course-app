import { Component, OnDestroy } from '@angular/core';

import { Course } from '@app/models';
import { FilterPipe } from './pipes';
import { CoursesService } from './services';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnDestroy {
  searchedCourses: Course[];

  get courses() {
    let coursesList = [];
    this.coursesSub = this.coursesService.getCourses().subscribe(courses => coursesList = courses);
    return coursesList;
  }

  get filteredCourses() {
    return this.searchedCourses ? this.searchedCourses : this.courses;
  }

  get hasCourses() {
    return !!this.filteredCourses.length;
  }

  private coursesSub: Subscription;

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService) {}

  ngOnDestroy(): void {
    this.coursesSub.unsubscribe();
  }

  onAddNewCourse(): void {
    console.log('Add new course');
  }

  onDeleteCourse(course: Course): void {
    this.coursesService.removeCourse(course);
  }

  onEditCourse(course: Course): void {
    console.log(`Edit from parent ${course.title} with id ${course.id}`);
  }

  onLoadMoreCourses(): void {
    console.log('Load more courses');
  }

  onSearchCourse(searchTerm: string): void {
    this.searchedCourses = this.filterPipe.transform(this.courses, searchTerm);
  }
}
