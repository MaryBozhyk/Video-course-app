import { Injectable } from '@angular/core';

import { Course } from '@app/models';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [
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

  getCourses(): Course[] {
    return this.courses;
  }

  createCourse(course: Partial<Course>): void {
    this.courses.push(this.formatCourse(course));
  }

  getCourse(id: string): Course {
    return this.courses.find(course => course.id === id);
  }

  updateCourse(course: Partial<Course>): void {
    const updatedCourse = this.formatCourse(course);

    this.courses = this.courses.map(course => course.id === updatedCourse.id ? updatedCourse : course);
  }

  removeCourse(course: Course): void {
    this.courses = this.courses.filter(item => item !== course);
  }

  private formatCourse(course : Partial<Course>): Course {
    return {
      id: course.id,
      title: course.title || null,
      creationDate: new Date(course.creationDate) || null,
      duration: course.duration || null,
      description: course.description || null
    }
  }
}
