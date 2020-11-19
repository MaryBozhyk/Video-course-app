import { Component, OnInit } from '@angular/core';

import { Course } from '@app/models';
import { FilterPipe } from './pipes';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  courses: Course[];
  filteredCourses: Course[];

  get hasCourses() {
    return !!this.filteredCourses.length;
  }

  constructor(private filterPipe: FilterPipe) {}

  ngOnInit(): void {
    this.courses = [
      {
        id: '1',
        title: 'Video Course 1. Name tag',
        creationDate: new Date('2020, 11, 16'),
        duration: 40,
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRated: true
      },
      {
        id: '2',
        title: 'Video Course 2. Name tag',
        creationDate: new Date('2020, 08, 28'),
        duration: 120,
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
        topRated: true
      },
      {
        id: '3',
        title: 'Video Course 3. Name tag',
        creationDate: new Date('2020, 11, 20'),
        duration: 98,
        description:
          'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
      }
    ];
    this.filteredCourses = this.courses;
  }

  onAddNewCourse(): void {
    console.log('Add new course');
  }

  onDeleteCourse(course: Course): void {
    console.log(`Delete from parent ${course.title} with id ${course.id}`);
  }

  onEditCourse(course: Course): void {
    console.log(`Edit from parent ${course.title} with id ${course.id}`);
  }

  onLoadMoreCourses(): void {
    console.log('Load more courses');
  }

  onSearchCourse(searchTerm: string): void {
    this.filteredCourses = this.filterPipe.transform(this.courses, searchTerm);
  }
}
