import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CONSTANTS } from '@app/constants/constants';
import { Option } from '@app/models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthorsService {
  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Option[]> {
    return this.http.get<Option[]>(`${CONSTANTS.baseUrl}/authors`);
  }
}
