import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageModule } from './courses-page.module';
import { FilterPipe } from './pipes/filter.pipe';

import { ngMocks } from 'ng-mocks';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(ngMocks.guts([CoursesPageComponent, FilterPipe], CoursesPageModule));
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    console.log = jasmine.createSpy('log');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search method should show correct result', () => {
    const searchTerm = '1';
    const filteredAfterSearch = component.courses.filter((course) => {
      return course.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    expect(component.filteredCourses).toEqual(component.courses);

    component.onSearchCourse(searchTerm);
    expect(component.filteredCourses).toEqual(filteredAfterSearch);
  });

  // TODO: Should be replaced when logic to the method will be added
  xit('delete method should show correct result', () => {
    component.onDeleteCourse(component.courses[0]);
    expect(console.log).toHaveBeenCalledWith(
      `Delete from parent ${component.courses[0].title} with id ${component.courses[0].id}`
    );
  });

  // TODO: Should be replaced when logic to the method will be added
  xit('load more method should show correct result', () => {
    component.onLoadMoreCourses();
    expect(console.log).toHaveBeenCalledWith('Load more courses');
  });
});
