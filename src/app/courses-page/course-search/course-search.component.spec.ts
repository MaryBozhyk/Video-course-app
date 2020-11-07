import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CourseSearchComponent } from './course-search.component';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;
  let buttonEl: DebugElement;
  const defaultValue = 'course1';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseSearchComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('.search-btn'));
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise console.log event when clicked', () => {
    console.log = jasmine.createSpy('log');
    component.value = defaultValue;
    fixture.detectChanges();
    buttonEl.triggerEventHandler('click', null);
    expect(console.log).toHaveBeenCalledWith(`You search: ${defaultValue}`);
  });
});
