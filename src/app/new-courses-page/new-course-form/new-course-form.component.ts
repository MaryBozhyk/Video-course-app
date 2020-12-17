import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '@app/models';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCourseFormComponent implements OnInit {
  @Input() course: Course;

  @Output() newCourse = new EventEmitter<Partial<Course>>();
  @Output() cancel = new EventEmitter<void>();
  
  value: Partial<Course> = {};
  courseTitle: string = "New course";

  ngOnInit(): void {
    if (this.course) {
      this.value = this.course;
      this.courseTitle = "Edit course";
    }    
  }

  onSave(): void {
    this.newCourse.emit(this.value);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
