import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDurationComponent {
  @Input() courseDuration: number;
  @Output() courseDurationChange = new EventEmitter<number>();

  onDurationChange(model: number): void {
    this.courseDuration = model;
    this.courseDurationChange.emit(model);
  }
}
