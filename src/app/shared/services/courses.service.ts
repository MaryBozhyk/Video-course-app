import { Injectable } from '@angular/core';

import { HttpCoursesService } from '@app/api';
import { CONSTANTS } from '@app/constants/constants';
import { Course } from '@app/models';

import { Observable } from 'rxjs';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private paginationSize: number = CONSTANTS.paginationSize;  

  constructor(private httpCourses: HttpCoursesService) {}

  getCourses(): Observable<Course[]> {
    const requestBody = {
      count: this.paginationSize.toString(),
      sort: 'date'
    };

    return this.httpCourses.getCourses(requestBody);
  }

  createCourse(course: Partial<Course>): Observable<Course> {
    const updatedCourse = this.formatCourse(course);
    return this.httpCourses.addCourse(updatedCourse);
  }

  getCourse(id: number): Observable<Course> {
    return this.httpCourses.getCourse(id);
  }

  getSearchedCourses(searchTerm: string): Observable<Course[]> {
    const requestBody = {
      textFragment: searchTerm,
      sort: 'date'
    };

    return this.httpCourses.getCourses(requestBody);
  }

  updateCourse(course: Partial<Course>): Observable<Course> {
    const updatedCourse = this.formatCourse(course);
    return this.httpCourses.updateCourse(updatedCourse);
  }

  removeCourse(course: Course): Observable<Course> {
    return this.httpCourses.deleteCourse(course.id);
  }

  loadMoreCourses(): Observable<Course[]> {
    this.paginationSize += CONSTANTS.paginationSize;

    const requestBody = {
      count: this.paginationSize.toString(),
      sort: 'date'
    }

    return this.httpCourses.getCourses(requestBody);
  }

  private formatCourse(course : Partial<Course>): Course {
    return {
      id: course.id || uuidv4(),
      name: course.name || null,
      date: course.date || null,
      length: course.length || null,
      description: course.description || null,
      authors: course?.authors || null,
      isTopRated: course.isTopRated
    }
  }
}
