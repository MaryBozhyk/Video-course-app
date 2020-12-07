import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/models';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDialogComponent {
  @Input() course: Course;
  
  @Output() cancel = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}
