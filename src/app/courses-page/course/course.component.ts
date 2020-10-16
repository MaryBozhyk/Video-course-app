import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '@app/models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.edit.emit(this.course);
  }

  onDelete(): void {
    this.delete.emit(this.course);
  }
}
