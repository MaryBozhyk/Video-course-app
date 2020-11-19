import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Course } from '@app/models';
import { CoursesCreationDirective } from './courses-creation.directive';

@Component({
  template: `
    <div [appCoursesCreation]="mockCourses[0].creationDate">Green border</div>
    <div [appCoursesCreation]="mockCourses[2].creationDate">Blue border</div>
    <div [appCoursesCreation]="mockCourses[1].creationDate">No Border</div>
    <div>No Border</div>
  `
})
class TestComponent {
  mockCourses: Course[] = [
    {
      id: '1',
      title: 'Video Course 1. Name tag',
      creationDate: new Date('2020, 11, 16'),
      duration: 40,
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      topRated: true
    },
    {
      id: '2',
      title: 'Video Course 2. Name tag',
      creationDate: new Date('2020, 08, 28'),
      duration: 120,
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
      topRated: true
    },
    {
      id: '3',
      title: 'Video Course 3. Name tag',
      creationDate: new Date('2020, 11, 20'),
      duration: 98,
      description:
        'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    }
  ];
}

describe('CoursesCreationDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];
  let bareBlock: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CoursesCreationDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.directive(CoursesCreationDirective));

    bareBlock = fixture.debugElement.query(By.css('div:not([appCoursesCreation])'));
  });

  it('should have three highlighted elements', () => {
    expect(des.length).toBe(3);
  });

  it('1st <div> should have class "is-fresh"', () => {
    const el = des[0].nativeElement;
    expect(el).toHaveClass('is-fresh');
  });

  it('2nd <div> hould have class "is-upcomming"', () => {
    const el = des[1].nativeElement;
    expect(el).toHaveClass('is-upcomming');
  });

  it('3d <div> should not have a customProperty', () => {
    expect(des[2].properties.customProperty).toBeUndefined();
  });

  it('bare <div> should not have a customProperty', () => {
    expect(bareBlock.properties.customProperty).toBeUndefined();
  });
});
