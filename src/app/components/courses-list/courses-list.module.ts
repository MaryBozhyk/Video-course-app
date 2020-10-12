import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './courses-list.component';
import { CourseModule } from '@app/components/course';

@NgModule({
  declarations: [CoursesListComponent],
  imports: [
    CommonModule,
    CourseModule
  ],
  exports: [CoursesListComponent]
})
export class CoursesListModule { }
