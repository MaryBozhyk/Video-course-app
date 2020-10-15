import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesPageComponent } from './courses-page.component';
import { AddCourseButtonComponent } from './add-course-button';
import { CourseComponent } from './course';
import { CourseSearchComponent } from './course-search';
import { CoursesListComponent } from './courses-list';
import { BreadcrumbsModule } from '@shared/components/breadcrumbs';
import { HeaderModule } from '@shared/components/header';
import { LogOffButtonModule } from '@shared/components/log-off-button';
import { LoginButtonModule } from '@shared/components/login-button';

@NgModule({
  declarations: [
    CoursesPageComponent,
    AddCourseButtonComponent,
    CourseComponent,
    CourseSearchComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    HeaderModule,
    LogOffButtonModule,
    LoginButtonModule
  ],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
