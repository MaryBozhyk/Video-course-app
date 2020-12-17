import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageComponent } from './error-page.component';
import { ErrorPageRoutingModule } from './error-page-routing.module';
import { HeaderModule } from '@shared/components/header';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ErrorPageRoutingModule
  ]
})
export class ErrorPageModule { }
