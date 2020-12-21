import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@app/app.component';
import { CoreModule, httpInterceptorProviders } from '@app/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { BreadcrumbsModule } from '@shared/components/breadcrumbs';
import { FooterModule } from '@shared/components/footer';
import { HeaderModule } from '@shared/components/header';
import { LoginButtonsModule } from '@shared/components/login-buttons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    BreadcrumbsModule,
    FooterModule,
    HeaderModule,
    LoginButtonsModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
