import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BreadcrumbsModule } from '@shared/components/breadcrumbs';
import { HeaderModule } from '@shared/components/header';
import { LoginButtonsModule } from '@shared/components/login-buttons';
import { CoursesPageModule } from '@app/courses-page';
import { NewCourseFormComponent } from './new-course-form';
import { NewCoursesPageComponent } from './new-courses-page.component';
import { CourseDateComponent } from './course-date';
import { CourseDurationComponent } from './course-duration';
import { CourseAuthorsComponent } from './course-authors';

@NgModule({
  declarations: [
    NewCourseFormComponent,
    NewCoursesPageComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbsModule,
    HeaderModule,
    LoginButtonsModule,
    CoursesPageModule,
    RouterModule,
  ],
  exports: [NewCoursesPageComponent]
})
export class NewCoursesPageModule { }
