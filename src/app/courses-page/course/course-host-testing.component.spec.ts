import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Course } from '@app/models';
import { CourseComponent } from './course.component';
import { DurationPipe } from '../pipes/duration.pipe';

@Component({
  template: `
    <app-course [course]="course" (delete)="onDeleteCourse($event)" (edit)="onEditCourse($event)"> </app-course>
  `
})
class TestHostComponent {
  course = {
    id: '1',
    title: 'Video Course 1. Name tag',
    creationDate: new Date('2020, 08, 28'),
    duration: 40,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false
  };
  deletedCourse: Course;
  editedCourse: Course;

  onDeleteCourse(course: Course): void {
    this.deletedCourse = course;
  }

  onEditCourse(course: Course): void {
    this.editedCourse = course;
  }
}

describe('CourseComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, TestHostComponent, DurationPipe]
    });
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show correct title', () => {
    const courseTitle = fixture.debugElement.query(By.css('.title'));
    const courseTitleEl = courseTitle.nativeElement;
    expect(courseTitleEl.textContent).toContain(testHost.course.title.toUpperCase());
  });

  it('should show correct time', () => {
    const courseTime = fixture.debugElement.query(By.css('.time'));
    const courseTimeEl = courseTime.nativeElement;
    const hours = Math.floor(testHost.course.duration / 60);
    const minutes = Math.floor(testHost.course.duration % 60);
    const courseDuration = (hours) ? `${hours}h ${minutes}min` : `${minutes}min`;

    expect(courseTimeEl.textContent).toContain(courseDuration);
  });

  it('should show correct date', () => {
    const courseDate = fixture.debugElement.query(By.css('.date'));
    const courseTitleEl = courseDate.nativeElement;
    const expectedMonth = testHost.course.creationDate.getMonth() + 1;
    const expectedDay = testHost.course.creationDate.getDate();
    const expestedYear = testHost.course.creationDate.getFullYear().toString().substr(-2);
    const courseTitlePipedEl = `${expectedMonth}/${expectedDay}/${expestedYear}`;
    expect(courseTitleEl.textContent).toContain(courseTitlePipedEl);
  });

  it('should show correct description', () => {
    const courseDescription = fixture.debugElement.query(By.css('.information'));
    const courseDescriptionEl = courseDescription.nativeElement;
    expect(courseDescriptionEl.textContent).toContain(testHost.course.description);
  });

  it('should raise edit item', () => {
    const editBtn = fixture.debugElement.query(By.css('.edit-btn'));

    editBtn.triggerEventHandler('click', null);
    expect(testHost.editedCourse).toBe(testHost.course);
  });

  it('should raise delete item', () => {
    const deleteBtn = fixture.debugElement.query(By.css('.delete-btn'));

    deleteBtn.triggerEventHandler('click', null);
    expect(testHost.deletedCourse).toBe(testHost.course);
  });
});
