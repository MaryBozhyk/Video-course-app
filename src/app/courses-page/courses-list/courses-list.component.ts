import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '@app/models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[];

  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<Course>();
  @Output() loadmore = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteCourse(course: Course): void {
    this.delete.emit(course);
  }

  onEditCourse(course: Course): void {
    this.edit.emit(course);
  }

  onLoadMoreCourses(): void {
    this.loadmore.emit();
  }
}
