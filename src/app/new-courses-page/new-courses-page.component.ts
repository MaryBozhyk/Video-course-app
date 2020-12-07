import { Component } from '@angular/core';

import { CoursesService } from '@app/courses-page';
import { Course } from '@app/models';

@Component({
  selector: 'app-new-courses-page',
  templateUrl: './new-courses-page.component.html',
  styleUrls: ['./new-courses-page.component.scss']
})
export class NewCoursesPageComponent {

  constructor(private coursesService: CoursesService) {}

  onCreateNewCourse(course: Partial<Course>): void {
    this.coursesService.createCourse(course);
  }

  onCancel(): void {
    console.log("Adding is cancelled")
  }
}
