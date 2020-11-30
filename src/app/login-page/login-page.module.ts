import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { HeaderModule } from '@shared/components/header';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, HeaderModule, ReactiveFormsModule],  
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
