import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { CoursesStoreModule } from './courses';
import { AuthStoreModule } from './authentication';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CoursesStoreModule,
    AuthStoreModule
  ]
})
export class RootStoreModule { }
