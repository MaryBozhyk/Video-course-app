import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent {
  @Output() searchTerm = new EventEmitter<string>();

  searchText: FormControl = new FormControl('');

  onTypeText(): void {
    this.searchTerm.emit(this.searchText.value);
  }
}
