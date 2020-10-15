import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOffButtonComponent } from './log-off-button.component';

describe('LogOffButtonComponent', () => {
  let component: LogOffButtonComponent;
  let fixture: ComponentFixture<LogOffButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOffButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOffButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
