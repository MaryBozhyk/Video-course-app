import { Injectable } from '@angular/core';

import { Course } from '@app/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [
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

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  createCourse(course: Course): void {
    this.courses.push(course);
  }

  getCourse(id: string): Observable<Course> {
    return of(this.courses.find(course => course.id === id));
  }

  updateCourse(course: Course): Observable<Course[]> {
    return of([...this.courses, course]);
  }

  removeCourse(course: Course): void {
    this.courses = this.courses.filter(item => item !== course);
  }
}
