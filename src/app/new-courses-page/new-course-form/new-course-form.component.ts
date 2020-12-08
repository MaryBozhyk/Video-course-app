import { Component, EventEmitter, Output } from '@angular/core';

import { Course } from '@app/models';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent {
  value: Partial<Course> = {};

  @Output() newCourse = new EventEmitter<Partial<Course>>();
  @Output() cancel = new EventEmitter<void>();

  onSave(): void {
    this.newCourse.emit(this.value);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
