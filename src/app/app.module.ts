import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@app/app.component';
import { CoreModule, httpInterceptorProviders, RootStoreModule } from '@app/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { Language } from '@app/models';
import { BreadcrumbsModule } from '@shared/components/breadcrumbs';
import { FooterModule } from '@shared/components/footer';
import { HeaderModule } from '@shared/components/header';
import { LoginButtonsModule } from '@shared/components/login-buttons';
import { SpinnerModule } from '@shared/components/spinner';
import { CustomSelectModule } from '@shared/components/custom-select';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    CustomSelectModule,
    SpinnerModule.forRoot(),
    RootStoreModule,
    TranslateModule.forRoot({
      defaultLanguage: Language.En,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
