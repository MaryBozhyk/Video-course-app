import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@app/app.component';
import { CoreModule, httpInterceptorProviders, RootStoreModule } from '@app/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { BreadcrumbsModule } from '@shared/components/breadcrumbs';
import { FooterModule } from '@shared/components/footer';
import { HeaderModule } from '@shared/components/header';
import { LoginButtonsModule } from '@shared/components/login-buttons';
import { SpinnerModule } from '@shared/components/spinner';

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
    SpinnerModule.forRoot(),
    RootStoreModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
