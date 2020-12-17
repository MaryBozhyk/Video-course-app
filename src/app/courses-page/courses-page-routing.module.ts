import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-page.component';
import { NewCoursesPageComponent } from '@app/new-courses-page';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CoursesPageComponent },
      { path: 'new', component: NewCoursesPageComponent },
      { path: ':id', component: NewCoursesPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule {}
