import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SpinnerService {
  private isLoading = new BehaviorSubject<boolean>(false);

  isVisible(): Observable<boolean> {
    return this.isLoading;
  }

  hide(): void {
    this.isLoading.next(false);
  }

  show(): void {
    this.isLoading.next(true);
  }
}
