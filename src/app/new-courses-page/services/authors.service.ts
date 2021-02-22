import { Injectable } from '@angular/core';

import { HttpAuthorsService } from '@app/api';
import { Option } from '@app/models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private httpAuthors: HttpAuthorsService) {}

  getAuthors(): Observable<Option[]> {
    return this.httpAuthors.getAuthors();
  }
}
