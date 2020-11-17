import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesPageModule } from '../courses-page.module';
import { CoursesListComponent } from './courses-list.component';

import { ngMocks } from 'ng-mocks';

const testCourses = [
  {
    id: '1',
    title: 'Video Course 1. Name tag',
    creationDate: new Date('2020, 08, 28'),
    duration: {
      hours: 1,
      minutes: 38
    },
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
  }
];

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(ngMocks.guts(CoursesListComponent, CoursesPageModule));
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.courses = testCourses;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise load-more items', () => {
    spyOn(component.loadmore, 'emit');
    const loadMoreBtn = fixture.debugElement.query(By.css('.txt'));

    loadMoreBtn.triggerEventHandler('click', null);
    expect(component.loadmore.emit).toHaveBeenCalled();
  });

  it('should raise edit item', () => {
    spyOn(component.edit, 'emit');
    expect(component.edit).toBeNull;

    component.onEditCourse(testCourses[0]);
    expect(component.edit.emit).toHaveBeenCalledWith(testCourses[0]);
  });

  it('should raise delete item', () => {
    spyOn(component.delete, 'emit');
    expect(component.delete).toBeNull;

    component.onDeleteCourse(testCourses[0]);
    expect(component.delete.emit).toHaveBeenCalledWith(testCourses[0]);
  });
});
