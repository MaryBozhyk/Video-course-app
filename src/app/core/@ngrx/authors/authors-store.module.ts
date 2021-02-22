import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { authorsReducer } from './authors.reducer';
import { AuthorsEffects } from './authors.effects';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('authors', authorsReducer),
    EffectsModule.forFeature([AuthorsEffects])
  ]
})
export class AuthorsStoreModule { }
