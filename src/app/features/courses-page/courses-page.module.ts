import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { CoursesPageComponent } from './courses-page.component';
import { CourseSearchComponent, CoursesListComponent, CourseComponent, AddCourseButtonComponent } from './components';


@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseSearchComponent,
    CoursesListComponent,
    CourseComponent,
    AddCourseButtonComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
