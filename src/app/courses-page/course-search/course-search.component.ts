import { Component } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent {
  value: string;

  onClick(): void {
    console.log(`You search: ${this.value}`);
  }
}
