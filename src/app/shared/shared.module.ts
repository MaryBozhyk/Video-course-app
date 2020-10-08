import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent, BreadcrumbsComponent, FooterComponent, LoginComponent, LogOffComponent } from './components';

const COMPONETS = [
  HeaderComponent,
  BreadcrumbsComponent,
  FooterComponent,
  LoginComponent,
  LogOffComponent
];

@NgModule({
  declarations: [...COMPONETS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONETS, CommonModule]
})
export class SharedModule { }
