import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '@app/models';

import { CoursesPageComponent } from './courses-page.component';

@Component({ selector: 'app-header', template: '' })
class HeaderStubComponent { }

@Component({ selector: 'app-login-buttons', template: '' })
class LoginButtonsStubComponent { }

@Component({ selector: 'app-breadcrumbs', template: '' })
class BreadcrumbsStubComponent { }

@Component({ selector: 'app-course-search', template: '' })
class CourseSearchStubComponent { }

@Component({ selector: 'app-courses-list', template: '' })
class CoursesListStubComponent {
  @Input() courses: Course[];
}

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        HeaderStubComponent,
        LoginButtonsStubComponent,
        BreadcrumbsStubComponent,
        CourseSearchStubComponent,
        CoursesListStubComponent
      ]
    });
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    console.log = jasmine.createSpy('log');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise add-new-course event when clicked', () => {
    const loadMoreBtn = fixture.debugElement.query(By.css('.add-btn'));

    loadMoreBtn.triggerEventHandler('click', null);
    expect(console.log).toHaveBeenCalledWith('Add new course');
  });

  it('should show correct result on delete', () => {
    component.onDeleteCourse(component.courses[0]);
    expect(console.log).toHaveBeenCalledWith(`Delete from parent ${component.courses[0].title} with id ${component.courses[0].id}`);
  });

  it('should show correct result on edit', () => {
    component.onEditCourse(component.courses[0]);
    expect(console.log).toHaveBeenCalledWith(`Edit from parent ${component.courses[0].title} with id ${component.courses[0].id}`);
  });

  it('should show correct result on load more', () => {
    component.onLoadMoreCourses();
    expect(console.log).toHaveBeenCalledWith('Load more courses');
  });
});
