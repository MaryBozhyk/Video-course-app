import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoursesPageComponent } from './new-courses-page.component';

describe('NewCoursesPageComponent', () => {
  let component: NewCoursesPageComponent;
  let fixture: ComponentFixture<NewCoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoursesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
