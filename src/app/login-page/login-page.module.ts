import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { HeaderModule } from '@shared/components/header';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ReactiveFormsModule,
    LoginPageRoutingModule
  ],  
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
