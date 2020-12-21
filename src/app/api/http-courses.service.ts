import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course, RequestBody } from '@app/models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCoursesService {
  url: string = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  getCourses(requestBody: RequestBody): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.url}/courses?sort=${requestBody.sort}&count=${requestBody.count}&textFragment=${requestBody.textFragment || null}`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.url}/courses/${id}`);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.patch<Course>(`${this.url}/courses/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(`${this.url}/courses/${id}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.url}/courses`, course);
  }
}
