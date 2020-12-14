import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core';
import { LoginPageModule } from "@app/login-page";
import { AppRoutingModule } from '@app/app-routing.module';
import { ErrorPageModule } from '@app/error-page';
import { BreadcrumbsModule } from '@shared/components/breadcrumbs';
import { FooterModule } from '@shared/components/footer';
import { HeaderModule } from '@shared/components/header';
import { LoginButtonsModule } from '@shared/components/login-buttons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    BreadcrumbsModule,
    LoginPageModule,
    ErrorPageModule,
    FooterModule,
    HeaderModule,
    LoginButtonsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
