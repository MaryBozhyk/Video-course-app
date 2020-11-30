import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '@app/models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() course: Course;

  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<Course>();

  isOpen = false;

  onEdit(): void {
    this.edit.emit(this.course);
  }

  onDelete(): void {
    this.delete.emit(this.course);
  }

  onCancel(): void {
    this.isOpen = false;
  }

  onDetached(): void {
    this.isOpen = false;
  }
}
