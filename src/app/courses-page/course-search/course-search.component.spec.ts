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

  beforeEach(async () => {
    await MockBuilder(CourseSearchComponent).keep(FormsModule);
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

  it('should raise search item', () => {
    component.value = defaultValue;
    spyOn(component.searchTerm, 'emit');

    component.onClick();
    expect(component.searchTerm.emit).toHaveBeenCalledWith(defaultValue);
  });
});
