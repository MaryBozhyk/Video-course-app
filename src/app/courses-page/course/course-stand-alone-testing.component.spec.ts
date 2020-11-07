import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '@app/models';

import { CourseComponent } from './course.component';

const testCourse = {
  id: '1',
  title: 'Video Course 1. Name tag',
  creationDate: new Date('2020, 08, 28'),
  duration: {
    hours: 1,
    minutes: 38
  },
  description:
    'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
};

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent]
    });
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = testCourse;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should show correct title', () => {
    const courseTitle = fixture.debugElement.query(By.css('.title'));
    const courseTitleEl = courseTitle.nativeElement;
    expect(courseTitleEl.textContent).toContain(testCourse.title);
  });

  it('should show correct time', () => {
    const courseTime = fixture.debugElement.query(By.css('.time'));
    const courseTimeEl = courseTime.nativeElement;
    expect(courseTimeEl.textContent).toContain(testCourse.duration.hours);
    expect(courseTimeEl.textContent).toContain(testCourse.duration.minutes);
  });

  it('should show correct date', () => {
    const courseDate = fixture.debugElement.query(By.css('.date'));
    const courseTitleEl = courseDate.nativeElement;
    const expectedMonth =  testCourse.creationDate.getMonth() + 1;
    const expectedDay = testCourse.creationDate.getDate();
    const expestedYear = testCourse.creationDate.getFullYear().toString().substr(-2);
    const courseTitlePipedEl = `${expectedMonth}/${expectedDay}/${expestedYear}`;
    expect(courseTitleEl.textContent).toContain(courseTitlePipedEl);
  });

  it('should show correct description', () => {
    const courseDescription = fixture.debugElement.query(By.css('.information'));
    const courseDescriptionEl = courseDescription.nativeElement;
    expect(courseDescriptionEl.textContent).toContain(testCourse.description);
  });

  it('should raise edit event when clicked (triggerEventHandler)', () => {
    const editBtn = fixture.debugElement.query(By.css('.edit-btn'));
    let selectedCourse: Course;
    component.edit.subscribe((course: Course) => selectedCourse = course);

    editBtn.triggerEventHandler('click', null);
    expect(selectedCourse).toBe(testCourse);
  });

  it('should raise delete event when clicked (triggerEventHandler)', () => {
    const deleteBtn = fixture.debugElement.query(By.css('.delete-btn'));
    let selectedCourse: Course;
    component.delete.subscribe((course: Course) => selectedCourse = course);

    deleteBtn.triggerEventHandler('click', null);
    expect(selectedCourse).toBe(testCourse);
  });
});
