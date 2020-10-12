import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core';
import { CoursesPageModule } from '@app/components/courses-page';
import {
  AddCourseButtonModule,
  BreadcrumbsModule,
  CourseModule,
  CourseSearchModule,
  CoursesListModule,
  FooterModule,
  HeaderModule,
  LogOffModule,
  LoginModule
} from '@app/components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AddCourseButtonModule,
    BreadcrumbsModule,
    CourseModule,
    CourseSearchModule,
    CoursesListModule,
    CoursesPageModule,
    FooterModule,
    HeaderModule,
    LogOffModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
