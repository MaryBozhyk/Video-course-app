import { TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from './app.component';
import { FooterModule } from './shared/components/footer';
import { CoursesPageComponent } from './courses-page';

import { MockModule } from 'ng-mocks';

const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }
];

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), MockModule(FooterModule)],
      declarations: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
