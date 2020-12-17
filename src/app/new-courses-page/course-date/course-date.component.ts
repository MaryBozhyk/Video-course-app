import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDateComponent {
  @Input()
  get courseDate(): Date | string { return this.date;}
  set courseDate(date: Date | string) {
    this.date = (date instanceof Date) ? date.toISOString().substring(0, 10) : date;
  }

  @Output() courseDateChange = new EventEmitter<Date>();

  private date: string;

  onDateChange(model: Date): void {
    this.courseDateChange.emit(model);
  }
}
