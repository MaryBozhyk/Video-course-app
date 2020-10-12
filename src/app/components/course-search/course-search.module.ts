import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseSearchComponent } from './course-search.component';

@NgModule({
  declarations: [CourseSearchComponent],
  imports: [CommonModule],
  exports: [CourseSearchComponent]
})
export class CourseSearchModule { }
