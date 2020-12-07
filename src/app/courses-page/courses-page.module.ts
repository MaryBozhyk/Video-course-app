import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { BreadcrumbsModule } from '@shared/components/breadcrumbs';
import { HeaderModule } from '@shared/components/header';
import { LoginButtonsModule } from '@shared/components/login-buttons';
import { CoursesPageComponent } from './courses-page.component';
import { CourseComponent } from './course';
import { CourseSearchComponent } from './course-search';
import { CoursesListComponent } from './courses-list';
import { CourseDialogComponent } from './course-dialog';
import { CoursesCreationDirective } from './directives';
import { DurationPipe, OrderByPipe, FilterPipe } from './pipes';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    CourseSearchComponent,
    CoursesListComponent,
    CourseDialogComponent,
    CoursesCreationDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
  ],
  imports: [CommonModule, FormsModule, OverlayModule, BreadcrumbsModule, HeaderModule, LoginButtonsModule],
  exports: [CoursesPageComponent, DurationPipe],
  providers: [FilterPipe],
})
export class CoursesPageModule {}
