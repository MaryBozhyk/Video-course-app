import { Component } from '@angular/core';

import { Course } from '@app/models';
import { FilterPipe } from './pipes';
import { CoursesService } from './services';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {
  searchedCourses: Course[];
  searchTerm: string;

  get courses() {
    return this.coursesService.getCourses();
  }

  get filteredCourses() {    
    return this.searchedCourses ? this.searchedCourses : this.courses;
  }

  get hasCourses() {
    return !!this.filteredCourses.length;
  }

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService) {}

  onDeleteCourse(course: Course): void {
    this.coursesService.removeCourse(course);

    if (this.searchTerm) {
      this.onSearchCourse(this.searchTerm);
    }
  }

  onLoadMoreCourses(): void {
    console.log('Load more courses');
  }

  onSearchCourse(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.searchedCourses = this.filterPipe.transform(this.courses, searchTerm);
  }
}
