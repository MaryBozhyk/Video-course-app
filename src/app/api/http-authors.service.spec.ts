import { TestBed } from '@angular/core/testing';

import { HttpAuthorsService } from './http-authors.service';

describe('HttpAuthorsService', () => {
  let service: HttpAuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
