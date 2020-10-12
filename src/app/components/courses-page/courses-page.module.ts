import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesPageComponent } from './courses-page.component';
import {
  AddCourseButtonModule,
  BreadcrumbsModule,
  CourseSearchModule,
  CoursesListModule,
  HeaderModule,
  LogOffModule,
  LoginModule
} from '@app/components';

@NgModule({
  declarations: [CoursesPageComponent],
  imports: [
    CommonModule,
    AddCourseButtonModule,
    BreadcrumbsModule,
    CourseSearchModule,
    CoursesListModule,
    HeaderModule,
    LogOffModule,
    LoginModule
  ],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
