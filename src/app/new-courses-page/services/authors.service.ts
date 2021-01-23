import { Injectable } from '@angular/core';

import { HttpAuthorsService } from '@app/api';
import { Author } from '@app/models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private httpAuthors: HttpAuthorsService) {}

  getAuthors(): Observable<Author[]> {
    return this.httpAuthors.getAuthors();
  }
}
