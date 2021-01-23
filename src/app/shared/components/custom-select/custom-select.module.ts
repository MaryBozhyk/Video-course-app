import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomSelectComponent } from './custom-select.component';

@NgModule({
  declarations: [ CustomSelectComponent ],
  imports: [ CommonModule, ReactiveFormsModule ],
  exports: [ CustomSelectComponent ],
})
export class CustomSelectModule { }
