import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreModule {
  public constructor(@SkipSelf() @Optional() parent: CoreModule) {
    if (parent) {
      throw new Error(`${parent.constructor.name} has already been loaded.`);
    }
  }
}
