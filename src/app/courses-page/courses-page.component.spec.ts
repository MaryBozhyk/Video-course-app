import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageModule } from './courses-page.module';

import { ngMocks } from 'ng-mocks';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(ngMocks.guts(CoursesPageComponent, CoursesPageModule));
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    console.log = jasmine.createSpy('log');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise add-new-course', () => {
    spyOn(component, 'onAddNewCourse');
    const loadMoreBtn = fixture.debugElement.query(By.css('.add-btn'));

    loadMoreBtn.triggerEventHandler('click', null);
    expect(component.onAddNewCourse).toHaveBeenCalled();
  });

  // TODO: Should be replaced when logic to the method will be added
  xit('add method should show correct result', () => {
    component.onAddNewCourse();
    expect(console.log).toHaveBeenCalledWith('Add new course');
  });

  // TODO: Should be replaced when logic to the method will be added
  xit('delete method should show correct result', () => {
    component.onDeleteCourse(component.courses[0]);
    expect(console.log).toHaveBeenCalledWith(
      `Delete from parent ${component.courses[0].title} with id ${component.courses[0].id}`
    );
  });

  // TODO: Should be replaced when logic to the method will be added
  xit('edit method should show correct result', () => {
    component.onEditCourse(component.courses[0]);
    expect(console.log).toHaveBeenCalledWith(
      `Edit from parent ${component.courses[0].title} with id ${component.courses[0].id}`
    );
  });

  // TODO: Should be replaced when logic to the method will be added
  xit('load more method should show correct result', () => {
    component.onLoadMoreCourses();
    expect(console.log).toHaveBeenCalledWith('Load more courses');
  });
});
