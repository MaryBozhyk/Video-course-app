import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent {
  @Output() searchTerm = new EventEmitter<string>();

  value: string;

  onClick(): void {
    this.searchTerm.emit(this.value);
  }
}
