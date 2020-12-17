import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from '@shared/services';
import { Course } from '@app/models';

@Component({
  selector: 'app-new-courses-page',
  templateUrl: './new-courses-page.component.html',
  styleUrls: ['./new-courses-page.component.scss']
})
export class NewCoursesPageComponent implements OnInit {
  courseId: string;
  course: Course;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');

    if (this.courseId != null) {
      this.course = {...this.coursesService.getCourse(this.courseId)};
    }
  }

  onCreateNewCourse(course: Partial<Course>): void {
    this.course ? this.coursesService.updateCourse(course) : this.coursesService.createCourse(course);
    this.router.navigate(['courses']);
  }

  onCancel(): void {
    this.router.navigate(['courses']);
  }
}
