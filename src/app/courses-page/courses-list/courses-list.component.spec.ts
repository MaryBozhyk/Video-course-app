import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '@app/models';
import { CourseComponent } from '../course';

import { CoursesListComponent } from './courses-list.component';

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
      'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  }
];

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent, CourseComponent]
    });
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.courses = testCourses;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise load-more event when clicked', () => {
    const loadMoreBtn = fixture.debugElement.query(By.css('.txt'));
    let loadMore: boolean;
    component.loadmore.subscribe(() => loadMore = true);

    loadMoreBtn.triggerEventHandler('click', null);
    expect(loadMore).toBe(true);
  });

  it('should show correct title', () => {
    const courseTitle = fixture.debugElement.query(By.css('.title'));
    const courseTitleEl = courseTitle.nativeElement;
    expect(courseTitleEl.textContent).toContain(component.courses[0].title);
  });

  it('should show correct time', () => {
    const courseTime = fixture.debugElement.query(By.css('.time'));
    const courseTimeEl = courseTime.nativeElement;
    expect(courseTimeEl.textContent).toContain(component.courses[0].duration.hours);
    expect(courseTimeEl.textContent).toContain(component.courses[0].duration.minutes);
  });

  it('should show correct date', () => {
    const courseDate = fixture.debugElement.query(By.css('.date'));
    const courseTitleEl = courseDate.nativeElement;
    const expectedMonth = component.courses[0].creationDate.getMonth() + 1;
    const expectedDay = component.courses[0].creationDate.getDate();
    const expestedYear = component.courses[0].creationDate.getFullYear().toString().substr(-2);
    const courseTitlePipedEl = `${expectedMonth}/${expectedDay}/${expestedYear}`;
    expect(courseTitleEl.textContent).toContain(courseTitlePipedEl);
  });

  it('should show correct description', () => {
    const courseDescription = fixture.debugElement.query(By.css('.information'));
    const courseDescriptionEl = courseDescription.nativeElement;
    expect(courseDescriptionEl.textContent).toContain(component.courses[0].description);
  });

  it('should raise edit event when clicked (triggerEventHandler)', () => {
    const editBtn = fixture.debugElement.query(By.css('.edit-btn'));
    let selectedCourse: Course;
    component.edit.subscribe((course: Course) => selectedCourse = course);

    editBtn.triggerEventHandler('click', null);
    expect(selectedCourse).toBe(component.courses[0]);
  });

  it('should raise delete event when clicked (triggerEventHandler)', () => {
    const deleteBtn = fixture.debugElement.query(By.css('.delete-btn'));
    let selectedCourse: Course;
    component.delete.subscribe((course: Course) => selectedCourse = course);

    deleteBtn.triggerEventHandler('click', null);
    expect(selectedCourse).toBe(component.courses[0]);
  });
});
