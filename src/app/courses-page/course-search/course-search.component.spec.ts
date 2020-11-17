import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CourseSearchComponent } from './course-search.component';

import { MockBuilder } from 'ng-mocks';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;
  let buttonEl: DebugElement;
  const defaultValue = 'course1';

  beforeEach(() => {
    MockBuilder(CourseSearchComponent).keep(FormsModule);
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick method should be called', () => {
    spyOn(component, 'onClick');
    buttonEl = fixture.debugElement.query(By.css('.search-btn'));
    fixture.detectChanges();
    buttonEl.triggerEventHandler('click', null);
    expect(component.onClick).toHaveBeenCalled();
  });

  // TODO: Should be replaced when logic to the method will be added
  xit('onClick method should show correct result', () => {
    console.log = jasmine.createSpy('log');
    component.value = defaultValue;
    fixture.detectChanges();
    component.onClick();
    expect(console.log).toHaveBeenCalledWith(`You search: ${defaultValue}`);
  });
});
