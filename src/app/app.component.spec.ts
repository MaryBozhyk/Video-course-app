import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterModule } from './shared/components/footer';

import { ngMocks } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
      ngMocks.guts(AppComponent, [FooterModule, RouterModule.forRoot([])])
    ).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'video-course-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('video-course-app');
  });
});
