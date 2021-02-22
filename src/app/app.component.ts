import { Component } from '@angular/core';

import { SpinnerService } from '@shared/components/spinner';
import { Language } from '@app/models';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSpinner$: Observable<boolean>;

  constructor (
    private translateService: TranslateService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.setTranslationLanguage();
    this.showSpinner$ = this.spinnerService.isVisible().pipe(
      delay(0)
    );
  }

  private setTranslationLanguage() {
    this.translateService.use(Language.En);
  }
}
