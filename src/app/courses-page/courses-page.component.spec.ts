import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageModule } from './courses-page.module';

import { ngMocks } from 'ng-mocks';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(ngMocks.guts([CoursesPageComponent], CoursesPageModule));
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    console.log = jasmine.createSpy('log');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // TODO: Should be replaced when logic to the method will be added
  xit('load more method should show correct result', () => {
    component.onLoadMoreCourses();
    expect(console.log).toHaveBeenCalledWith('Load more courses');
  });
});
