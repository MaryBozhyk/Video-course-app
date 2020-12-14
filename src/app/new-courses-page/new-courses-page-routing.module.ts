import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewCoursesPageComponent } from './new-courses-page.component';

const routes: Routes = [
  { path: '', component: NewCoursesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCoursesPageRoutingModule {}
