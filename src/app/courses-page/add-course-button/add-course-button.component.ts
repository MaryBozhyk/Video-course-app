import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-course-button',
  templateUrl: './add-course-button.component.html',
  styleUrls: ['./add-course-button.component.scss']
})
export class AddCourseButtonComponent implements OnInit {
  @Output() addCourse = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddCourse(): void {
    this.addCourse.emit();
  }

}
