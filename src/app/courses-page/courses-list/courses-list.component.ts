import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '@app/models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent {
  @Input() courses: Course[];

  @Output() delete = new EventEmitter<Course>();
  @Output() loadmore = new EventEmitter<void>();

  onDeleteCourse(course: Course): void {
    this.delete.emit(course);
  }

  onLoadMoreCourses(): void {
    this.loadmore.emit();
  }
}
