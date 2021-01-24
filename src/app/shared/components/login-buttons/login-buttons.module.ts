import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginButtonsComponent } from './login-buttons.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginButtonsComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LoginButtonsComponent]
})
export class LoginButtonsModule {}
