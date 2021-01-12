import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { coursesReducer } from './courses.reducer';
import { CoursesEffects } from './courses.effects';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('courses', coursesReducer),
    EffectsModule.forFeature([CoursesEffects])
  ]
})
export class CoursesStoreModule { }
