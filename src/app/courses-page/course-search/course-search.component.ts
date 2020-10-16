import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {
  value: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(`You search: ${this.value}`);
  }

}
