import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '@app/models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() course: Course;

  @Output() delete = new EventEmitter<Course>();

  isOpen = false;

  onDelete(): void {
    this.delete.emit(this.course);
  }

  onCancel(): void {
    this.isOpen = false;
  }
}
