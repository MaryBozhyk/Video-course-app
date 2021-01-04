import { Component } from '@angular/core';

import { SpinnerService } from '@shared/components/spinner';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSpinner$: Observable<boolean>;

  constructor (private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.showSpinner$ = this.spinnerService.isVisible().pipe(
      delay(0)
    );
  }
}
