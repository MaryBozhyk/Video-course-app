import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CONSTANTS } from '@app/constants/constants';
import { Author } from '@app/models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthorsService {
  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${CONSTANTS.baseUrl}/authors`);
  }
}
