import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from '@app/courses-page';
import { LoginPageComponent } from '@app/login-page';
import { NewCoursesPageComponent } from '@app/new-courses-page';
import { ErrorPageComponent } from '@app/error-page';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { 
    path: 'courses',
    canActivate: [AuthGuard],
    children: [
    { path: '', component: CoursesPageComponent },
    { path: ':id', component: NewCoursesPageComponent },
    { path: 'new', component: NewCoursesPageComponent }
  ]},
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
