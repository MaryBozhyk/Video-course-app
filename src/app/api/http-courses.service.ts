import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course, RequestBody } from '@app/models';
import { CONSTANTS } from '@app/constants/constants';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCoursesService {
  constructor(private http: HttpClient) { }

  getCourses(requestBody: RequestBody): Observable<Course[]> {
    return this.http.get<Course[]>(`${CONSTANTS.baseUrl}/courses`, { params: {...requestBody} });
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${CONSTANTS.baseUrl}/courses/${id}`);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.patch<Course>(`${CONSTANTS.baseUrl}/courses/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(`${CONSTANTS.baseUrl}/courses/${id}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${CONSTANTS.baseUrl}/courses`, course);
  }
}
