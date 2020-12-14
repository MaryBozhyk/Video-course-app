import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from '@app/login-page';
import { ErrorPageComponent } from '@app/error-page';
import { AuthGuard } from '@app/core';

const routes: Routes = [
  { 
    path: 'courses/new',
    canActivate: [AuthGuard],
    loadChildren: () => import('@app/new-courses-page').then(m => m.NewCoursesPageModule),
  },
  { 
    path: 'courses/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('@app/new-courses-page').then(m => m.NewCoursesPageModule),
  },
  { 
    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: () => import('@app/courses-page').then(m => m.CoursesPageModule),
  },
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
