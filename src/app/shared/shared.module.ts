import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './pipes';

@NgModule({
  declarations: [DurationPipe],
  imports: [CommonModule],
  exports: [CommonModule, DurationPipe]
})
export class SharedModule { }
