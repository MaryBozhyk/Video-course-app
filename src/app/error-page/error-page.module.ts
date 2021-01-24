import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageComponent } from './error-page.component';
import { ErrorPageRoutingModule } from './error-page-routing.module';
import { HeaderModule } from '@shared/components/header';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    HeaderModule,
    ErrorPageRoutingModule
  ]
})
export class ErrorPageModule { }
