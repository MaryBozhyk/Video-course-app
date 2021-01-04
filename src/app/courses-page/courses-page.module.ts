import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { BreadcrumbsModule } from '@shared/components/breadcrumbs';
import { HeaderModule } from '@shared/components/header';
import { LoginButtonsModule } from '@shared/components/login-buttons';
import { SharedModule } from '@shared/shared.module';
import { CoursesPageComponent } from './courses-page.component';
import { CourseComponent } from './course';
import { CourseSearchComponent } from './course-search';
import { CoursesListComponent } from './courses-list';
import { CourseDialogComponent } from './course-dialog';
import { CoursesCreationDirective } from './directives';
import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { NewCoursesPageModule } from '@app/new-courses-page';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    CourseSearchComponent,
    CoursesListComponent,
    CourseDialogComponent,
    CoursesCreationDirective,
  ],
  imports: [
    SharedModule,
    FormsModule,
    OverlayModule,
    BreadcrumbsModule,
    HeaderModule,
    LoginButtonsModule,
    NewCoursesPageModule,
    CoursesPageRoutingModule    
  ],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
