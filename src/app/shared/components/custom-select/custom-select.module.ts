import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomSelectComponent } from './custom-select.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ CustomSelectComponent ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [ CustomSelectComponent ],
})
export class CustomSelectModule { }
