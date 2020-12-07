import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from '@app/courses-page';
import { LoginPageComponent } from '@app/login-page';
import { NewCoursesPageComponent } from '@app/new-courses-page';

const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'new-course', component: NewCoursesPageComponent },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
