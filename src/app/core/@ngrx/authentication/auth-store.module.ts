import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { authReducer } from './auth.reducer';
import { AuthEffects } from './auth.effects';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthStoreModule { }
