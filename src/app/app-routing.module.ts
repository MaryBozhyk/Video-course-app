import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  { 
    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: () => import('@app/courses-page').then(m => m.CoursesPageModule),
  },
  { 
    path: 'login',
    loadChildren: () => import('@app/login-page').then(m => m.LoginPageModule),
  },
  { 
    path: '**',
    loadChildren: () => import('@app/error-page').then(m => m.ErrorPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
