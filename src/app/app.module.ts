import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core';
import { CoursesPageModule } from '@app/courses-page';
import { BreadcrumbsModule } from '@shared/components/breadcrumbs';
import { FooterModule } from '@shared/components/footer';
import { HeaderModule } from '@shared/components/header';
import { LogOffButtonModule } from '@shared/components/log-off-button';
import { LoginButtonModule } from '@shared/components/login-button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BreadcrumbsModule,
    CoursesPageModule,
    FooterModule,
    HeaderModule,
    LogOffButtonModule,
    LoginButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
