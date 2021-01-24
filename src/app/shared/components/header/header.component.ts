import { Component } from '@angular/core';

import { Language } from '@app/models';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  get Language() {
    return Language;
  }

  constructor(private translateService: TranslateService) {}

  onLanguageSelectChange(value: Event) {
    this.translateService.use((value.target as HTMLSelectElement).value);
  }
}
